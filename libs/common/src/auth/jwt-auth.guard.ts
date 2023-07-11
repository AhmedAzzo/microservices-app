import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
    Logger,
    UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Reflector } from '@nestjs/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AUTH_SERVICE } from '../constants/services';
import { IUser } from '../interfaces';
import { ErrorsFactory } from '../base/Errors.factory';

@Injectable()
export class JwtAuthGuard extends ErrorsFactory implements CanActivate {
    private readonly logger = new Logger(JwtAuthGuard.name);
    constructor(
        @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy, private readonly reflector: Reflector) { super(); }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const jwt =
            context.switchToHttp().getRequest().cookies?.Authentication ||
            context.switchToHttp().getRequest().headers?.authentication;
        if (!jwt) {
            throw this.throwUnauthorisedError('You dont have enough permission to access this data.');
        }
        const roles = this.reflector.get<string>('roles', context.getHandler());
        return this.authClient
            .send<IUser>('authenticate', {
                Authentication: jwt,
            })
            .pipe(
                tap((res) => {
                    const UserRoles: string[] = res.roles?.map((role) => role['code']);
                    if (roles) {
                        for (const role of roles) {
                            if (!UserRoles?.includes(role)) {
                                this.logger.error('The user does not have valid roles.');
                                throw new UnauthorizedException();
                            }
                        }
                    }
                    context.switchToHttp().getRequest().user = res;
                }),
                map(() => true),
                catchError((err) => {
                    throw this.throwUnauthorisedError('You dont have enough permission to access this data.');
                }),
            );
    }
}
