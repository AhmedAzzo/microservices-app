import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ErrorsFactory } from '../base/Errors.factory';
export declare class JwtAuthGuard extends ErrorsFactory implements CanActivate {
    private readonly authClient;
    private readonly reflector;
    private readonly logger;
    constructor(authClient: ClientProxy, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
