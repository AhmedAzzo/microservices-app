"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JwtAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const core_1 = require("@nestjs/core");
const rxjs_1 = require("rxjs");
const services_1 = require("../constants/services");
const Errors_factory_1 = require("../base/Errors.factory");
let JwtAuthGuard = JwtAuthGuard_1 = class JwtAuthGuard extends Errors_factory_1.ErrorsFactory {
    constructor(authClient, reflector) {
        super();
        this.authClient = authClient;
        this.reflector = reflector;
        this.logger = new common_1.Logger(JwtAuthGuard_1.name);
    }
    canActivate(context) {
        var _a, _b;
        const jwt = ((_a = context.switchToHttp().getRequest().cookies) === null || _a === void 0 ? void 0 : _a.Authentication) ||
            ((_b = context.switchToHttp().getRequest().headers) === null || _b === void 0 ? void 0 : _b.authentication);
        if (!jwt) {
            throw this.throwUnauthorisedError('You dont have enough permission to access this data.');
        }
        const roles = this.reflector.get('roles', context.getHandler());
        return this.authClient
            .send('authenticate', {
            Authentication: jwt,
        })
            .pipe((0, rxjs_1.tap)((res) => {
            var _a;
            const UserRoles = (_a = res.roles) === null || _a === void 0 ? void 0 : _a.map((role) => role['code']);
            if (roles) {
                for (const role of roles) {
                    if (!(UserRoles === null || UserRoles === void 0 ? void 0 : UserRoles.includes(role))) {
                        this.logger.error('The user does not have valid roles.');
                        throw new common_1.UnauthorizedException();
                    }
                }
            }
            context.switchToHttp().getRequest().user = res;
        }), (0, rxjs_1.map)(() => true), (0, rxjs_1.catchError)((err) => {
            throw this.throwUnauthorisedError('You dont have enough permission to access this data.');
        }));
    }
};
JwtAuthGuard = JwtAuthGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(services_1.AUTH_SERVICE)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy, core_1.Reflector])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map