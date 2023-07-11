/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/auth/src/guards/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./apps/auth/src/guards/jwt-auth.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
}
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/auth/src/orgs/org.service.ts":
/*!*******************************************!*\
  !*** ./apps/auth/src/orgs/org.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Base_factory_1 = __webpack_require__(/*! @app/common/base/Base.factory */ "./libs/common/src/base/Base.factory.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let OrgsService = class OrgsService extends Base_factory_1.BaseFactory {
    constructor(orgsRepository) {
        super(orgsRepository);
        this.orgsRepository = orgsRepository;
    }
};
OrgsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.OrgsRepository !== "undefined" && dbhelper_1.OrgsRepository) === "function" ? _a : Object])
], OrgsService);
exports.OrgsService = OrgsService;


/***/ }),

/***/ "./apps/auth/src/orgs/orgs.module.ts":
/*!*******************************************!*\
  !*** ./apps/auth/src/orgs/orgs.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgsModule = void 0;
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const org_service_1 = __webpack_require__(/*! ./org.service */ "./apps/auth/src/orgs/org.service.ts");
let OrgsModule = class OrgsModule {
};
OrgsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dbhelper_1.DbHelperModule
        ],
        controllers: [],
        providers: [
            org_service_1.OrgsService
        ],
        exports: [org_service_1.OrgsService],
    })
], OrgsModule);
exports.OrgsModule = OrgsModule;


/***/ }),

/***/ "./apps/auth/src/users/users.controller.ts":
/*!*************************************************!*\
  !*** ./apps/auth/src/users/users.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../guards/jwt-auth.guard */ "./apps/auth/src/guards/jwt-auth.guard.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/auth/src/users/users.service.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(user, createUserDto) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        const newUser = this.usersService.create(Object.assign({}, createUserDto), meta);
        return newUser;
    }
    async getUser(user) {
        return user;
    }
    async getUserUsers(user, queryParams) {
        return user;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _b : Object, typeof (_c = typeof common_2.CreateUserDto !== "undefined" && common_2.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _e : Object, typeof (_f = typeof common_2.IBaseQueryParams !== "undefined" && common_2.IBaseQueryParams) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserUsers", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/auth/src/users/users.module.ts":
/*!*********************************************!*\
  !*** ./apps/auth/src/users/users.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/auth/src/orgs/orgs.module.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/auth/src/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/auth/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            dbhelper_1.DbHelperModule
        ],
        controllers: [
            users_controller_1.UsersController
        ],
        providers: [
            users_service_1.UsersService,
        ],
        exports: [
            users_service_1.UsersService
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/auth/src/users/users.service.ts":
/*!**********************************************!*\
  !*** ./apps/auth/src/users/users.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const org_service_1 = __webpack_require__(/*! ../orgs/org.service */ "./apps/auth/src/orgs/org.service.ts");
const Base_factory_1 = __webpack_require__(/*! @app/common/base/Base.factory */ "./libs/common/src/base/Base.factory.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let UsersService = class UsersService extends Base_factory_1.BaseFactory {
    constructor(usersRepository, orgsService) {
        super(usersRepository);
        this.usersRepository = usersRepository;
        this.orgsService = orgsService;
    }
    async create(createUserDto, meta) {
        await this.validateCreateUserDto(createUserDto);
        let id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.user, common_1.ModulesSettings.userSettings);
        createUserDto.id = id;
        return this.usersRepository.create(Object.assign(Object.assign({}, createUserDto), { meta: meta, password: await bcrypt.hash(createUserDto.password, 10) }));
    }
    async validateCreateUserDto(createUserDto) {
        try {
            await this.usersRepository.findOne({ email: createUserDto.email });
        }
        catch (err) {
            return;
        }
        throw new common_2.UnprocessableEntityException('Email already exists.');
    }
    async verifyUser(email, password) {
        const user = await this.usersRepository.findOne({ email });
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new common_2.UnauthorizedException('Credentials are not valid.');
        }
        return user;
    }
    async getUser(getUserDto) {
        return this.usersRepository.findOne(getUserDto);
    }
};
UsersService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.UsersRepository !== "undefined" && dbhelper_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./apps/tuv-api/src/actions/actions.controller.ts":
/*!********************************************************!*\
  !*** ./apps/tuv-api/src/actions/actions.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionsController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const actions_service_1 = __webpack_require__(/*! ./actions.service */ "./apps/tuv-api/src/actions/actions.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ActionsController = class ActionsController extends base_1.BaseController {
    constructor(actionService) {
        super();
        this.actionService = actionService;
    }
    async getCategories({ id }, queryParams) {
        const queryKeyMapper = {};
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(Object.assign({}, queryParams), queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(queryParams.filter || {}, queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.actionService.getAll(Object.assign(Object.assign({}, query), { order: id }), Object.assign({}, paginationQuery)) }),
        });
    }
};
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _b : Object, typeof (_c = typeof common_1.IBaseQueryParamsDto !== "undefined" && common_1.IBaseQueryParamsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "getCategories", null);
ActionsController = __decorate([
    (0, common_2.Controller)('actions'),
    (0, swagger_1.ApiTags)('actions'),
    __metadata("design:paramtypes", [typeof (_a = typeof actions_service_1.ActionsService !== "undefined" && actions_service_1.ActionsService) === "function" ? _a : Object])
], ActionsController);
exports.ActionsController = ActionsController;


/***/ }),

/***/ "./apps/tuv-api/src/actions/actions.module.ts":
/*!****************************************************!*\
  !*** ./apps/tuv-api/src/actions/actions.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const actions_controller_1 = __webpack_require__(/*! ./actions.controller */ "./apps/tuv-api/src/actions/actions.controller.ts");
const actions_service_1 = __webpack_require__(/*! ./actions.service */ "./apps/tuv-api/src/actions/actions.service.ts");
const users_module_1 = __webpack_require__(/*! apps/auth/src/users/users.module */ "./apps/auth/src/users/users.module.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let ActionsModule = class ActionsModule {
};
ActionsModule = __decorate([
    (0, common_1.Module)({
        imports: [dbhelper_1.DbHelperModule, users_module_1.UsersModule],
        controllers: [actions_controller_1.ActionsController],
        providers: [actions_service_1.ActionsService],
    })
], ActionsModule);
exports.ActionsModule = ActionsModule;


/***/ }),

/***/ "./apps/tuv-api/src/actions/actions.service.ts":
/*!*****************************************************!*\
  !*** ./apps/tuv-api/src/actions/actions.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionsService = void 0;
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ActionsService = class ActionsService {
    constructor(actionRepo) {
        this.actionRepo = actionRepo;
    }
    async getAll(filterQuery, options) {
        return this.actionRepo.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.actionRepo.findOne({ _id });
    }
};
ActionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.ActionsRepository !== "undefined" && dbhelper_1.ActionsRepository) === "function" ? _a : Object])
], ActionsService);
exports.ActionsService = ActionsService;


/***/ }),

/***/ "./apps/tuv-api/src/app.module.ts":
/*!****************************************!*\
  !*** ./apps/tuv-api/src/app.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_3 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const Joi = __webpack_require__(/*! joi */ "joi");
const category_module_1 = __webpack_require__(/*! ./category/category.module */ "./apps/tuv-api/src/category/category.module.ts");
const product_module_1 = __webpack_require__(/*! ./product/product.module */ "./apps/tuv-api/src/product/product.module.ts");
const order_module_1 = __webpack_require__(/*! ./order/order.module */ "./apps/tuv-api/src/order/order.module.ts");
const settings_module_1 = __webpack_require__(/*! ./settings/settings.module */ "./apps/tuv-api/src/settings/settings.module.ts");
const orgs_module_1 = __webpack_require__(/*! ./orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const workspace_module_1 = __webpack_require__(/*! ./workspace/workspace.module */ "./apps/tuv-api/src/workspace/workspace.module.ts");
const workflow_module_1 = __webpack_require__(/*! ./workflow/workflow.module */ "./apps/tuv-api/src/workflow/workflow.module.ts");
const release_module_1 = __webpack_require__(/*! ./release/release.module */ "./apps/tuv-api/src/release/release.module.ts");
const nonerelease_module_1 = __webpack_require__(/*! ./nonerelease/nonerelease.module */ "./apps/tuv-api/src/nonerelease/nonerelease.module.ts");
const events_handlers_1 = __webpack_require__(/*! ./events-handlers */ "./apps/tuv-api/src/events-handlers/index.ts");
const actions_module_1 = __webpack_require__(/*! ./actions/actions.module */ "./apps/tuv-api/src/actions/actions.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_2.Module)({
        imports: [
            common_3.LoggerModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './apps/tuv-api/.env',
                validationSchema: Joi.object({
                    MONGODB_URI: Joi.string().required(),
                    PORT: Joi.number().required(),
                    AUTH_HOST: Joi.string().required(),
                    AUTH_PORT: Joi.number().required(),
                }),
            }),
            common_1.HealthModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            settings_module_1.SettingsModule,
            orgs_module_1.OrgsModule,
            workspace_module_1.WorkspaceModule,
            workflow_module_1.WorkflowModule,
            release_module_1.ReleaseModule,
            nonerelease_module_1.NoneReleaseModule,
            events_handlers_1.HandlersModule,
            actions_module_1.ActionsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/tuv-api/src/category/category.module.ts":
/*!******************************************************!*\
  !*** ./apps/tuv-api/src/category/category.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_controller_1 = __webpack_require__(/*! ./controllers/category.controller */ "./apps/tuv-api/src/category/controllers/category.controller.ts");
const sub_catregory_controller_1 = __webpack_require__(/*! ./controllers/sub-catregory.controller */ "./apps/tuv-api/src/category/controllers/sub-catregory.controller.ts");
const category_service_1 = __webpack_require__(/*! ./services/category.service */ "./apps/tuv-api/src/category/services/category.service.ts");
const sub_catregory_service_1 = __webpack_require__(/*! ./services/sub-catregory.service */ "./apps/tuv-api/src/category/services/sub-catregory.service.ts");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_2.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_1.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        controllers: [category_controller_1.CategoryController, sub_catregory_controller_1.SubCategoryController],
        providers: [
            category_service_1.CategoryService,
            sub_catregory_service_1.SubCategoryService,
        ],
        exports: [category_service_1.CategoryService, sub_catregory_service_1.SubCategoryService,],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),

/***/ "./apps/tuv-api/src/category/controllers/category.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/tuv-api/src/category/controllers/category.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const category_service_1 = __webpack_require__(/*! ../services/category.service */ "./apps/tuv-api/src/category/services/category.service.ts");
let CategoryController = class CategoryController extends base_1.BaseController {
    constructor(categoryService) {
        super();
        this.categoryService = categoryService;
    }
    async getCategories(queryParams) {
        const queryKeyMapper = {
            name: 'name',
        };
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(queryParams.filter || {}, queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.categoryService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getCategory({ id }) {
        const category = await this.categoryService.getOne(id);
        if (!category) {
            return this.throwNotFoundError('Category not found');
        }
        return this.categoryService.getOne(id);
    }
    async createCategory(createCategoryDto, user) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Category created successfully',
            data: await this.categoryService.create(createCategoryDto, meta),
        });
    }
    async editCategory({ id }, updateCategoryDto, user) {
        const category = await this.categoryService.getOne(id);
        if (!category) {
            return this.throwNotFoundError('Category not found');
        }
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Category updated successfully',
            data: await this.categoryService.update(id, updateCategoryDto, meta),
        });
    }
    async deleteCategory({ id }) {
        const category = await this.categoryService.getOne(id);
        if (!category) {
            return this.throwNotFoundError('Category not found');
        }
        return this.formatResponse({
            message: 'Category deleted successfully',
            data: await this.categoryService.delete(id),
        });
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.IBaseQueryParamsDto !== "undefined" && common_1.IBaseQueryParamsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.CreateCategoryDto !== "undefined" && common_1.CreateCategoryDto) === "function" ? _d : Object, typeof (_e = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _f : Object, typeof (_g = typeof common_1.UpdateCategoryDto !== "undefined" && common_1.UpdateCategoryDto) === "function" ? _g : Object, typeof (_h = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "editCategory", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
CategoryController = __decorate([
    (0, common_2.Controller)('category'),
    (0, swagger_1.ApiTags)('Categories'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Roles)(common_1.SystemRoles.category_manager),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),

/***/ "./apps/tuv-api/src/category/controllers/sub-catregory.controller.ts":
/*!***************************************************************************!*\
  !*** ./apps/tuv-api/src/category/controllers/sub-catregory.controller.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubCategoryController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sub_catregory_service_1 = __webpack_require__(/*! ../services/sub-catregory.service */ "./apps/tuv-api/src/category/services/sub-catregory.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const category_service_1 = __webpack_require__(/*! ../services/category.service */ "./apps/tuv-api/src/category/services/category.service.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
let SubCategoryController = class SubCategoryController extends base_1.BaseController {
    constructor(subCategoryService, categoryService) {
        super();
        this.subCategoryService = subCategoryService;
        this.categoryService = categoryService;
    }
    async getSubCategories(categoryId, queryParams) {
        const queryKeyMapper = {
            name: 'name',
        };
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(queryParams.filter || {}, queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.subCategoryService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getSubCategory({ id }) {
        return this.formatResponse({
            message: '',
            data: await this.subCategoryService.getOne(id),
        });
    }
    async createSubCategory(createCategoryDto, user) {
        const category = await this.categoryService.getOne(createCategoryDto.category);
        if (!category)
            return this.throwNotFoundError('Category not found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: '',
            data: await this.subCategoryService.create(createCategoryDto, meta),
        });
    }
    async editSubCategory({ id }, updateCategoryDto, user) {
        const category = await this.categoryService.getOne(updateCategoryDto.category);
        if (!category)
            return this.throwNotFoundError('Category not found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: '',
            data: await this.subCategoryService.update(id, updateCategoryDto, meta),
        });
    }
    async deleteSubCategory({ id }) {
        const category = await this.categoryService.getOne(id);
        if (!category)
            return this.throwNotFoundError('Category not found');
        return this.formatResponse({
            message: '',
            data: await this.subCategoryService.delete(id),
        });
    }
};
__decorate([
    (0, common_2.Get)('/:categoryId'),
    __param(0, (0, common_2.Param)('categoryId')),
    __param(1, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof common_1.IBaseQueryParamsDto !== "undefined" && common_1.IBaseQueryParamsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getSubCategories", null);
__decorate([
    (0, common_2.Get)('/:id/details'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getSubCategory", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof common_1.CreateSubCategoryDto !== "undefined" && common_1.CreateSubCategoryDto) === "function" ? _e : Object, typeof (_f = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "createSubCategory", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _g : Object, typeof (_h = typeof common_1.UpdateSubCategoryDto !== "undefined" && common_1.UpdateSubCategoryDto) === "function" ? _h : Object, typeof (_j = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "editSubCategory", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "deleteSubCategory", null);
SubCategoryController = __decorate([
    (0, common_2.Controller)('sub-category'),
    (0, swagger_1.ApiTags)('Sub Categories'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    (0, common_1.Roles)(common_1.SystemRoles.category_manager),
    __metadata("design:paramtypes", [typeof (_a = typeof sub_catregory_service_1.SubCategoryService !== "undefined" && sub_catregory_service_1.SubCategoryService) === "function" ? _a : Object, typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object])
], SubCategoryController);
exports.SubCategoryController = SubCategoryController;


/***/ }),

/***/ "./apps/tuv-api/src/category/services/category.service.ts":
/*!****************************************************************!*\
  !*** ./apps/tuv-api/src/category/services/category.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
let CategoryService = class CategoryService {
    constructor(categoryRepository, orgsService) {
        this.categoryRepository = categoryRepository;
        this.orgsService = orgsService;
    }
    async create(createCategoryDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.category, common_1.ModulesSettings.categorySettings);
        return this.categoryRepository.create(Object.assign(Object.assign({}, createCategoryDto), { id, meta }));
    }
    async update(_id, updateCategoryDto, meta) {
        return this.categoryRepository.update({ _id }, Object.assign(Object.assign({}, updateCategoryDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.categoryRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.categoryRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.categoryRepository.findOneAndDelete({ _id });
    }
};
CategoryService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.CategoryRepository !== "undefined" && dbhelper_1.CategoryRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./apps/tuv-api/src/category/services/sub-catregory.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/tuv-api/src/category/services/sub-catregory.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubCategoryService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
let SubCategoryService = class SubCategoryService {
    constructor(categoryRepository, orgsService) {
        this.categoryRepository = categoryRepository;
        this.orgsService = orgsService;
    }
    async create(createCategoryDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.category, common_1.ModulesSettings.categorySettings);
        return this.categoryRepository.create(Object.assign(Object.assign({}, createCategoryDto), { id, meta }));
    }
    async update(_id, updateCategoryDto, meta) {
        return this.categoryRepository.findOneAndUpdate({ _id }, Object.assign(Object.assign({}, updateCategoryDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.categoryRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.categoryRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.categoryRepository.findOneAndDelete({ _id });
    }
};
SubCategoryService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.SubCategoryRepository !== "undefined" && dbhelper_1.SubCategoryRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/events/index.ts":
/*!**********************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/events/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workspaces/add-workspace-event */ "./apps/tuv-api/src/events-handlers/events/workspaces/add-workspace-event.ts"), exports);


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/events/order/change-order-status-event.ts":
/*!************************************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/events/order/change-order-status-event.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangeOrderStatusEvent = void 0;
class ChangeOrderStatusEvent {
    constructor(data) {
        this.data = data;
    }
}
exports.ChangeOrderStatusEvent = ChangeOrderStatusEvent;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/events/workspaces/add-workspace-event.ts":
/*!***********************************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/events/workspaces/add-workspace-event.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddWorkspaceEvent = void 0;
class AddWorkspaceEvent {
    constructor(name) {
        this.name = name;
    }
}
exports.AddWorkspaceEvent = AddWorkspaceEvent;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/handlers/handlers.module.ts":
/*!**********************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/handlers/handlers.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandlersModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workspaces_1 = __webpack_require__(/*! ./workspaces */ "./apps/tuv-api/src/events-handlers/handlers/workspaces/index.ts");
const change_order_status_handler_1 = __webpack_require__(/*! ./order/change-order-status-handler */ "./apps/tuv-api/src/events-handlers/handlers/order/change-order-status-handler.ts");
let HandlersModule = class HandlersModule {
};
HandlersModule = __decorate([
    (0, common_2.Module)({
        imports: [
            cqrs_1.CqrsModule,
            common_1.RmqModule.register({
                name: common_1.ACTIONS_SERVICE,
            }),
            common_1.RmqModule.register({
                name: common_1.NOTIFICATIONS_SERVICE,
            }),
            common_1.RmqModule.register({
                name: common_1.ORDER_SERVICE,
            }),
            dbhelper_1.DbHelperModule,
        ],
        providers: [workspaces_1.AddWorkspaceHandler, change_order_status_handler_1.ChangeOrderStatusHandler],
    })
], HandlersModule);
exports.HandlersModule = HandlersModule;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/handlers/index.ts":
/*!************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/handlers/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers.module */ "./apps/tuv-api/src/events-handlers/handlers/handlers.module.ts"), exports);


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/handlers/order/change-order-status-handler.ts":
/*!****************************************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/handlers/order/change-order-status-handler.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangeOrderStatusHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const change_order_status_event_1 = __webpack_require__(/*! ../../events/order/change-order-status-event */ "./apps/tuv-api/src/events-handlers/events/order/change-order-status-event.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let ChangeOrderStatusHandler = class ChangeOrderStatusHandler {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async handle(event) {
        const { data: { _id, status }, } = event;
        this.orderRepo.findOneAndUpdate({ _id }, { status });
    }
};
__decorate([
    (0, microservices_1.EventPattern)('order_status_changed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof change_order_status_event_1.ChangeOrderStatusEvent !== "undefined" && change_order_status_event_1.ChangeOrderStatusEvent) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ChangeOrderStatusHandler.prototype, "handle", null);
ChangeOrderStatusHandler = __decorate([
    (0, cqrs_1.EventsHandler)(change_order_status_event_1.ChangeOrderStatusEvent),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.OrderRepository !== "undefined" && dbhelper_1.OrderRepository) === "function" ? _a : Object])
], ChangeOrderStatusHandler);
exports.ChangeOrderStatusHandler = ChangeOrderStatusHandler;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/handlers/workspaces/add-workspace-handler.ts":
/*!***************************************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/handlers/workspaces/add-workspace-handler.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddWorkspaceHandler = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const workspace_repository_1 = __webpack_require__(/*! @app/common/dbhelper/workspace.repository */ "./libs/common/src/dbhelper/workspace.repository.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const events_1 = __webpack_require__(/*! ../../events */ "./apps/tuv-api/src/events-handlers/events/index.ts");
let AddWorkspaceHandler = class AddWorkspaceHandler {
    constructor(notificationsClient, workspaceRepository) {
        this.notificationsClient = notificationsClient;
        this.workspaceRepository = workspaceRepository;
    }
    async handle(event) {
        const { name } = event;
        console.log('name', name);
        this.notificationsClient.emit('workspaces_received', { data: "hello ahmed in notidfications service" });
    }
};
AddWorkspaceHandler = __decorate([
    (0, cqrs_1.EventsHandler)(events_1.AddWorkspaceEvent),
    __param(0, (0, common_2.Inject)(common_1.NOTIFICATIONS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof workspace_repository_1.WorkspaceRepository !== "undefined" && workspace_repository_1.WorkspaceRepository) === "function" ? _b : Object])
], AddWorkspaceHandler);
exports.AddWorkspaceHandler = AddWorkspaceHandler;


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/handlers/workspaces/index.ts":
/*!***********************************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/handlers/workspaces/index.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./add-workspace-handler */ "./apps/tuv-api/src/events-handlers/handlers/workspaces/add-workspace-handler.ts"), exports);


/***/ }),

/***/ "./apps/tuv-api/src/events-handlers/index.ts":
/*!***************************************************!*\
  !*** ./apps/tuv-api/src/events-handlers/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./events */ "./apps/tuv-api/src/events-handlers/events/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./handlers */ "./apps/tuv-api/src/events-handlers/handlers/index.ts"), exports);


/***/ }),

/***/ "./apps/tuv-api/src/nonerelease/controllers/noneRelease.controller.ts":
/*!****************************************************************************!*\
  !*** ./apps/tuv-api/src/nonerelease/controllers/noneRelease.controller.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneReleaseController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const nonerelease_service_1 = __webpack_require__(/*! ../services/nonerelease.service */ "./apps/tuv-api/src/nonerelease/services/nonerelease.service.ts");
let NoneReleaseController = class NoneReleaseController extends base_1.BaseController {
    constructor(noneReleaseService) {
        super();
        this.noneReleaseService = noneReleaseService;
    }
    async getNoneReleases(queryParams) {
        const queryKeyMapper = {};
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(queryParams.filter || {}, queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.noneReleaseService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getNoneRelease({ id }) {
        const nonRelease = await this.noneReleaseService.getOne(id);
        if (!nonRelease)
            return this.throwNotFoundError('None Release Not Found');
        return this.noneReleaseService.getOne(id);
    }
    async createNoneRelease(createNoneReleaseDto, user) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Create None Release Successfully',
            data: await this.noneReleaseService.create(createNoneReleaseDto, meta),
        });
    }
    async editCategory({ id }, updateNoneReleaseDto, user) {
        const nonRelease = await this.noneReleaseService.getOne(id);
        if (!nonRelease)
            return this.throwNotFoundError('None Release Not Found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Update None Release Successfully',
            data: await this.noneReleaseService.update(id, updateNoneReleaseDto, meta),
        });
    }
    async editStatus({ id }, status, updateNoneReleaseDto) {
        const nonRelease = await this.noneReleaseService.getOne(id);
        if (!nonRelease)
            return this.throwNotFoundError('None Release Not Found');
        return this.formatResponse({
            message: 'Update None Release Successfully',
            data: await this.noneReleaseService.status(id, status, updateNoneReleaseDto),
        });
    }
    async deleteNoneRelease({ id }) {
        const nonRelease = await this.noneReleaseService.getOne(id);
        if (!nonRelease)
            return this.throwNotFoundError('None Release Not Found');
        return this.formatResponse({
            message: 'Delete None Release Successfully',
            data: await this.noneReleaseService.delete(id),
        });
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.IBaseQueryParamsDto !== "undefined" && common_1.IBaseQueryParamsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "getNoneReleases", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "getNoneRelease", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.CreateNoneReleaseDto !== "undefined" && common_1.CreateNoneReleaseDto) === "function" ? _d : Object, typeof (_e = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "createNoneRelease", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _f : Object, typeof (_g = typeof common_1.UpdateNoneReleaseDto !== "undefined" && common_1.UpdateNoneReleaseDto) === "function" ? _g : Object, typeof (_h = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "editCategory", null);
__decorate([
    (0, common_2.Put)('/:id/:status/status'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Param)('status')),
    __param(2, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _j : Object, String, typeof (_k = typeof common_1.UpdateNoneReleaseDto !== "undefined" && common_1.UpdateNoneReleaseDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "editStatus", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], NoneReleaseController.prototype, "deleteNoneRelease", null);
NoneReleaseController = __decorate([
    (0, common_2.Controller)('none-release'),
    (0, swagger_1.ApiTags)('None Release'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    (0, common_1.Roles)(common_1.SystemRoles.nonrelease_manager),
    __metadata("design:paramtypes", [typeof (_a = typeof nonerelease_service_1.NoneReleaseService !== "undefined" && nonerelease_service_1.NoneReleaseService) === "function" ? _a : Object])
], NoneReleaseController);
exports.NoneReleaseController = NoneReleaseController;


/***/ }),

/***/ "./apps/tuv-api/src/nonerelease/nonerelease.module.ts":
/*!************************************************************!*\
  !*** ./apps/tuv-api/src/nonerelease/nonerelease.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneReleaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const noneRelease_controller_1 = __webpack_require__(/*! ./controllers/noneRelease.controller */ "./apps/tuv-api/src/nonerelease/controllers/noneRelease.controller.ts");
const nonerelease_service_1 = __webpack_require__(/*! ./services/nonerelease.service */ "./apps/tuv-api/src/nonerelease/services/nonerelease.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let NoneReleaseModule = class NoneReleaseModule {
};
NoneReleaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        controllers: [noneRelease_controller_1.NoneReleaseController],
        providers: [nonerelease_service_1.NoneReleaseService]
    })
], NoneReleaseModule);
exports.NoneReleaseModule = NoneReleaseModule;


/***/ }),

/***/ "./apps/tuv-api/src/nonerelease/services/nonerelease.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/tuv-api/src/nonerelease/services/nonerelease.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneReleaseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let NoneReleaseService = class NoneReleaseService {
    constructor(noneReleaseRepository, orgsService) {
        this.noneReleaseRepository = noneReleaseRepository;
        this.orgsService = orgsService;
    }
    async create(createNoneReleaseDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_2.ModulesCodes.nonrelease, common_2.ModulesSettings.nonReleaseSettings);
        return this.noneReleaseRepository.create(Object.assign(Object.assign({}, createNoneReleaseDto), { id,
            meta }));
    }
    async update(_id, updateNoneReleaseDto, meta) {
        return this.noneReleaseRepository.update({ _id }, Object.assign(Object.assign({}, updateNoneReleaseDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.noneReleaseRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.noneReleaseRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.noneReleaseRepository.findOneAndDelete({ _id });
    }
    async status(_id, status, updateNoneReleaseDto) {
        return this.noneReleaseRepository.findOneAndDelete({ _id });
    }
};
NoneReleaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.NoneReleaseRepository !== "undefined" && dbhelper_1.NoneReleaseRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], NoneReleaseService);
exports.NoneReleaseService = NoneReleaseService;


/***/ }),

/***/ "./apps/tuv-api/src/order/controlers/order.controller.ts":
/*!***************************************************************!*\
  !*** ./apps/tuv-api/src/order/controlers/order.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
const order_dtos_1 = __webpack_require__(/*! @app/common/dto/order-dtos */ "./libs/common/src/dto/order-dtos/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const order_service_1 = __webpack_require__(/*! ../services/order.service */ "./apps/tuv-api/src/order/services/order.service.ts");
let OrderController = class OrderController extends base_1.BaseController {
    constructor(orderService) {
        super();
        this.orderService = orderService;
    }
    async getOrders(queryParams) {
        const queryKeyMapper = {};
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(JSON.parse(queryParams.filter || '{}'), queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.orderService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getOrder({ id }) {
        const order = await this.orderService.getOne(id);
        if (!order)
            return this.throwNotFoundError('Order Not Found');
        return this.formatResponse({
            message: '',
            data: await this.orderService.getOne(id),
        });
    }
    async createOrder(createOrderDto, user) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'create order success',
            data: await this.orderService.create(createOrderDto, meta),
        });
    }
    async editCategory({ id }, updateOrderDto, user) {
        const order = await this.orderService.getOne(id);
        if (!order)
            return this.throwNotFoundError('Order Not Found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'update order success',
            data: await this.orderService.update(id, updateOrderDto, meta),
        });
    }
    async editStatus({ id }, params) {
        return this.formatResponse({
            message: 'update order status success',
            data: await this.orderService.status(id, params.status),
        });
    }
    async deleteOrder({ id }) {
        const order = await this.orderService.getOne(id);
        if (!order)
            return this.throwNotFoundError('Order Not Found');
        return this.formatResponse({
            message: 'delete order success',
            data: await this.orderService.delete(id),
        });
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.IBaseQueryParams !== "undefined" && common_1.IBaseQueryParams) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrders", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof order_dtos_1.CreateOrderDto !== "undefined" && order_dtos_1.CreateOrderDto) === "function" ? _d : Object, typeof (_e = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _f : Object, typeof (_g = typeof order_dtos_1.UpdateOrderDto !== "undefined" && order_dtos_1.UpdateOrderDto) === "function" ? _g : Object, typeof (_h = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "editCategory", null);
__decorate([
    (0, common_2.Put)('/:id/:status/status'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _j : Object, typeof (_k = typeof order_dtos_1.UpdateOrderStatusDto !== "undefined" && order_dtos_1.UpdateOrderStatusDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "editStatus", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
OrderController = __decorate([
    (0, common_2.Controller)('coc'),
    (0, swagger_1.ApiTags)('COC'),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Roles)(common_1.SystemRoles.order_manager),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);
exports.OrderController = OrderController;


/***/ }),

/***/ "./apps/tuv-api/src/order/order.module.ts":
/*!************************************************!*\
  !*** ./apps/tuv-api/src/order/order.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const order_controller_1 = __webpack_require__(/*! ./controlers/order.controller */ "./apps/tuv-api/src/order/controlers/order.controller.ts");
const order_service_1 = __webpack_require__(/*! ./services/order.service */ "./apps/tuv-api/src/order/services/order.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.DatabaseModule,
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule,
            common_2.RmqModule.register({
                name: common_2.ORDER_SERVICE,
            }),
            common_2.RmqModule.register({
                name: common_2.ACTIONS_SERVICE,
            }),
            common_2.RmqModule.register({
                name: common_2.NOTIFICATIONS_SERVICE,
            }),
            cqrs_1.CqrsModule,
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
    })
], OrderModule);
exports.OrderModule = OrderModule;


/***/ }),

/***/ "./apps/tuv-api/src/order/services/order.service.ts":
/*!**********************************************************!*\
  !*** ./apps/tuv-api/src/order/services/order.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const change_order_status_event_1 = __webpack_require__(/*! ../../events-handlers/events/order/change-order-status-event */ "./apps/tuv-api/src/events-handlers/events/order/change-order-status-event.ts");
let OrderService = class OrderService {
    constructor(orderRepository, orgsService, orderClient, eventBus) {
        this.orderRepository = orderRepository;
        this.orgsService = orgsService;
        this.orderClient = orderClient;
        this.eventBus = eventBus;
    }
    async create(createOrderDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.order, common_1.ModulesSettings.orderSettings);
        const res = await this.orderRepository.create(Object.assign(Object.assign({}, createOrderDto), { id,
            meta, status: 'draft' }));
        this.eventBus.publish(new change_order_status_event_1.ChangeOrderStatusEvent({
            _id: res._id.toHexString(),
            status: 'draft',
            action: 'create',
        }));
        return res;
    }
    async update(_id, updateOrderDto, meta) {
        return this.orderRepository.updateMany({ _id }, Object.assign(Object.assign({}, updateOrderDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.orderRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.orderRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.orderRepository.findOneAndDelete({ _id });
    }
    async status(_id, status) {
        const order = await this.orderRepository.findOne({ _id });
        if (!order) {
            throw new Error('Order not found');
        }
        switch (order.status) {
            case 'draft': {
                await this.orderRepository.findOneAndUpdate({ _id }, { status });
                this.eventBus.publish(new change_order_status_event_1.ChangeOrderStatusEvent({ _id, status, action: 'update' }));
            }
            case 'partial-approved': {
                if (status === 'draft') {
                    throw new Error('Order status cannot return to draft');
                }
                await this.orderRepository.findOneAndUpdate({ _id }, { status });
                this.eventBus.publish(new change_order_status_event_1.ChangeOrderStatusEvent({ _id, status, action: 'update' }));
            }
            case 'approved':
            case 'rejected': {
                if (status === 'draft') {
                    throw new Error('Order status cannot change status for approved or rejected !');
                }
            }
        }
    }
};
OrderService = __decorate([
    (0, common_2.Injectable)(),
    __param(2, (0, common_2.Inject)(common_1.ORDER_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.OrderRepository !== "undefined" && dbhelper_1.OrderRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object, typeof (_d = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _d : Object])
], OrderService);
exports.OrderService = OrderService;


/***/ }),

/***/ "./apps/tuv-api/src/orgs/org.service.ts":
/*!**********************************************!*\
  !*** ./apps/tuv-api/src/orgs/org.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Base_factory_1 = __webpack_require__(/*! @app/common/base/Base.factory */ "./libs/common/src/base/Base.factory.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let OrgsService = class OrgsService extends Base_factory_1.BaseFactory {
    constructor(orgsRepository) {
        super(orgsRepository);
        this.orgsRepository = orgsRepository;
    }
};
OrgsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.OrgsRepository !== "undefined" && dbhelper_1.OrgsRepository) === "function" ? _a : Object])
], OrgsService);
exports.OrgsService = OrgsService;


/***/ }),

/***/ "./apps/tuv-api/src/orgs/orgs.module.ts":
/*!**********************************************!*\
  !*** ./apps/tuv-api/src/orgs/orgs.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgsModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const org_service_1 = __webpack_require__(/*! ./org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
let OrgsModule = class OrgsModule {
};
OrgsModule = __decorate([
    (0, common_2.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_1.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        controllers: [],
        providers: [
            org_service_1.OrgsService
        ],
        exports: [org_service_1.OrgsService],
    })
], OrgsModule);
exports.OrgsModule = OrgsModule;


/***/ }),

/***/ "./apps/tuv-api/src/product/controlers/product.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/tuv-api/src/product/controlers/product.controller.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
const product_service_1 = __webpack_require__(/*! ../services/product.service */ "./apps/tuv-api/src/product/services/product.service.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
let ProductController = class ProductController extends base_1.BaseController {
    constructor(productService, orgsService) {
        super();
        this.productService = productService;
        this.orgsService = orgsService;
    }
    async getProducts(queryParams) {
        const queryKeyMapper = {};
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(queryParams.filter || JSON.parse('{}'), queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.productService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getProduct({ id }) {
        const product = await this.productService.getOne(id);
        if (!product)
            return this.throwNotFoundError('Product Not Found');
        return this.formatResponse({
            message: '',
            data: await this.productService.getOne(id),
        });
    }
    async createProduct(createProductDto, user) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Product created successfully',
            data: await this.productService.create(createProductDto, meta),
        });
    }
    async editProduct({ id }, updateProductDto, user) {
        const product = await this.productService.getOne(id);
        if (!product)
            return this.throwNotFoundError('Product Not Found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Product updated successfully',
            data: await this.productService.update(id, updateProductDto, meta),
        });
    }
    async deleteProduct({ id }) {
        const product = await this.productService.getOne(id);
        if (!product)
            return this.throwNotFoundError('Product Not Found');
        return this.formatResponse({
            message: 'Product deleted successfully',
            data: await this.productService.delete(id),
        });
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.IBaseQueryParamsDto !== "undefined" && common_1.IBaseQueryParamsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof common_1.CreateProductDto !== "undefined" && common_1.CreateProductDto) === "function" ? _e : Object, typeof (_f = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _g : Object, typeof (_h = typeof common_1.UpdateProductDto !== "undefined" && common_1.UpdateProductDto) === "function" ? _h : Object, typeof (_j = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "editProduct", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_2.Controller)('product'),
    (0, swagger_1.ApiTags)('Product'),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Roles)(common_1.SystemRoles.product_manager),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], ProductController);
exports.ProductController = ProductController;


/***/ }),

/***/ "./apps/tuv-api/src/product/product.module.ts":
/*!****************************************************!*\
  !*** ./apps/tuv-api/src/product/product.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_controller_1 = __webpack_require__(/*! ./controlers/product.controller */ "./apps/tuv-api/src/product/controlers/product.controller.ts");
const product_service_1 = __webpack_require__(/*! ./services/product.service */ "./apps/tuv-api/src/product/services/product.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./apps/tuv-api/src/product/services/product.service.ts":
/*!**************************************************************!*\
  !*** ./apps/tuv-api/src/product/services/product.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
let ProductService = class ProductService {
    constructor(productRepository, orgsService) {
        this.productRepository = productRepository;
        this.orgsService = orgsService;
    }
    async create(createProductDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.product, common_1.ModulesSettings.productSettings);
        return this.productRepository.create(Object.assign(Object.assign({}, createProductDto), { id, meta }));
    }
    async update(_id, updateProductDto, meta) {
        return this.productRepository.update({ _id }, Object.assign(Object.assign({}, updateProductDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.productRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.productRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.productRepository.findOneAndDelete({ _id });
    }
};
ProductService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.ProductRepository !== "undefined" && dbhelper_1.ProductRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ "./apps/tuv-api/src/release/controllers/release.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/tuv-api/src/release/controllers/release.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseController = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const release_service_1 = __webpack_require__(/*! ../services/release.service */ "./apps/tuv-api/src/release/services/release.service.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const base_1 = __webpack_require__(/*! @app/common/base */ "./libs/common/src/base/index.ts");
let ReleaseController = class ReleaseController extends base_1.BaseController {
    constructor(releaseService) {
        super();
        this.releaseService = releaseService;
    }
    async getReleases(queryParams) {
        const queryKeyMapper = {};
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = (0, api_utils_1.getFilterQuery)(JSON.parse(queryParams.filter || '{}'), queryKeyMapper, queryValueParser);
        return this.formatResponse({
            message: '',
            paginationList: Object.assign(Object.assign({}, paginationQuery), { list: await this.releaseService.getAll(query, Object.assign({}, paginationQuery)) }),
        });
    }
    async getRelease({ id }) {
        const release = await this.releaseService.getOne(id);
        if (!release)
            return this.throwNotFoundError('Release not found');
        return this.formatResponse({
            message: '',
            data: await this.releaseService.getOne(id),
        });
    }
    async createRelease(createReleaseDto, user) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.formatResponse({
            message: 'Release created successfully',
            data: await this.releaseService.create(createReleaseDto, meta),
        });
    }
    async editCategory({ id }, updateReleaseDto, user) {
        const release = await this.releaseService.getOne(id);
        if (!release)
            return this.throwNotFoundError('Release not found');
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        return this.releaseService.update(id, updateReleaseDto, meta);
    }
    async editStatus({ id }, status, updateReleaseDto) {
        const release = await this.releaseService.getOne(id);
        if (!release)
            return this.throwNotFoundError('Release not found');
    }
    async deleteRelease({ id }) {
        const release = await this.releaseService.getOne(id);
        if (!release)
            return this.throwNotFoundError('Release not found');
        return this.releaseService.delete(id);
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.IBaseQueryParams !== "undefined" && common_1.IBaseQueryParams) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "getReleases", null);
__decorate([
    (0, common_2.Get)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "getRelease", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.CreateReleaseDto !== "undefined" && common_1.CreateReleaseDto) === "function" ? _d : Object, typeof (_e = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "createRelease", null);
__decorate([
    (0, common_2.Put)('/:id'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, common_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _f : Object, typeof (_g = typeof common_1.UpdateReleaseDto !== "undefined" && common_1.UpdateReleaseDto) === "function" ? _g : Object, typeof (_h = typeof common_1.User !== "undefined" && common_1.User) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "editCategory", null);
__decorate([
    (0, common_2.Put)('/:id/:status/status'),
    __param(0, (0, common_2.Param)()),
    __param(1, (0, common_2.Param)('status')),
    __param(2, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _j : Object, String, typeof (_k = typeof common_1.UpdateReleaseDto !== "undefined" && common_1.UpdateReleaseDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "editStatus", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof common_1.IdDto !== "undefined" && common_1.IdDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "deleteRelease", null);
ReleaseController = __decorate([
    (0, common_2.Controller)('release'),
    (0, swagger_1.ApiTags)('Release'),
    (0, common_2.UseGuards)(auth_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Roles)(common_1.SystemRoles.release_manager),
    __metadata("design:paramtypes", [typeof (_a = typeof release_service_1.ReleaseService !== "undefined" && release_service_1.ReleaseService) === "function" ? _a : Object])
], ReleaseController);
exports.ReleaseController = ReleaseController;


/***/ }),

/***/ "./apps/tuv-api/src/release/release.module.ts":
/*!****************************************************!*\
  !*** ./apps/tuv-api/src/release/release.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const release_service_1 = __webpack_require__(/*! ./services/release.service */ "./apps/tuv-api/src/release/services/release.service.ts");
const release_controller_1 = __webpack_require__(/*! ./controllers/release.controller */ "./apps/tuv-api/src/release/controllers/release.controller.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let ReleaseModule = class ReleaseModule {
};
ReleaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        providers: [release_service_1.ReleaseService],
        controllers: [release_controller_1.ReleaseController],
    })
], ReleaseModule);
exports.ReleaseModule = ReleaseModule;


/***/ }),

/***/ "./apps/tuv-api/src/release/services/release.service.ts":
/*!**************************************************************!*\
  !*** ./apps/tuv-api/src/release/services/release.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
let ReleaseService = class ReleaseService {
    constructor(releaseRepository, orgsService) {
        this.releaseRepository = releaseRepository;
        this.orgsService = orgsService;
    }
    async create(createReleaseDto, meta) {
        const id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_2.ModulesCodes.release, common_2.ModulesSettings.releaseSettings);
        return this.releaseRepository.create(Object.assign(Object.assign({}, createReleaseDto), { id, meta }));
    }
    async update(_id, updateReleaseDto, meta) {
        return this.releaseRepository.update({ _id }, Object.assign(Object.assign({}, updateReleaseDto), { meta }));
    }
    async getAll(filterQuery, options) {
        return this.releaseRepository.find(filterQuery, options);
    }
    async getOne(_id) {
        return this.releaseRepository.findOne({ _id });
    }
    async delete(_id) {
        return this.releaseRepository.findOneAndDelete({ _id });
    }
};
ReleaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dbhelper_1.ReleaseRepository !== "undefined" && dbhelper_1.ReleaseRepository) === "function" ? _a : Object, typeof (_b = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _b : Object])
], ReleaseService);
exports.ReleaseService = ReleaseService;


/***/ }),

/***/ "./apps/tuv-api/src/settings/settings.module.ts":
/*!******************************************************!*\
  !*** ./apps/tuv-api/src/settings/settings.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
let SettingsModule = class SettingsModule {
};
SettingsModule = __decorate([
    (0, common_2.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_1.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;


/***/ }),

/***/ "./apps/tuv-api/src/workflow/workflow.module.ts":
/*!******************************************************!*\
  !*** ./apps/tuv-api/src/workflow/workflow.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkflowModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
let WorkflowModule = class WorkflowModule {
};
WorkflowModule = __decorate([
    (0, common_2.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_1.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            dbhelper_1.DbHelperModule
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], WorkflowModule);
exports.WorkflowModule = WorkflowModule;


/***/ }),

/***/ "./apps/tuv-api/src/workspace/controllers/workspace.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/tuv-api/src/workspace/controllers/workspace.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspacesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const workspace_service_1 = __webpack_require__(/*! ../services/workspace.service */ "./apps/tuv-api/src/workspace/services/workspace.service.ts");
const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let WorkspacesController = class WorkspacesController {
    constructor(workspaceService) {
        this.workspaceService = workspaceService;
    }
    async createUser(user, createWorkspaceDto) {
        const meta = (0, api_utils_1.getMeta)(user.meta, user.id);
        const newWorkspace = this.workspaceService.create(createWorkspaceDto, meta);
        return newWorkspace;
    }
    async getWorkspaces(user, queryParams) {
        const workspaces = this.workspaceService.getAllWorkspaces(user, queryParams);
        return workspaces;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_1.JwtAuthGuard),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _b : Object, typeof (_c = typeof common_2.CreateWorkspaceDto !== "undefined" && common_2.CreateWorkspaceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], WorkspacesController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(auth_1.JwtAuthGuard),
    (0, common_2.Roles)(common_2.SystemRoles.workspaces_manager),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _d : Object, typeof (_e = typeof common_2.IBaseQueryParams !== "undefined" && common_2.IBaseQueryParams) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], WorkspacesController.prototype, "getWorkspaces", null);
WorkspacesController = __decorate([
    (0, common_1.Controller)('workspaces'),
    (0, swagger_1.ApiTags)('Workspaces'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof workspace_service_1.WorkspaceService !== "undefined" && workspace_service_1.WorkspaceService) === "function" ? _a : Object])
], WorkspacesController);
exports.WorkspacesController = WorkspacesController;


/***/ }),

/***/ "./apps/tuv-api/src/workspace/services/workspace.service.ts":
/*!******************************************************************!*\
  !*** ./apps/tuv-api/src/workspace/services/workspace.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const Base_factory_1 = __webpack_require__(/*! @app/common/base/Base.factory */ "./libs/common/src/base/Base.factory.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const api_utils_1 = __webpack_require__(/*! @app/common/utils/api.utils */ "./libs/common/src/utils/api.utils.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const events_handlers_1 = __webpack_require__(/*! ../../events-handlers */ "./apps/tuv-api/src/events-handlers/index.ts");
const org_service_1 = __webpack_require__(/*! ../../orgs/org.service */ "./apps/tuv-api/src/orgs/org.service.ts");
let WorkspaceService = class WorkspaceService extends Base_factory_1.BaseFactory {
    constructor(authClient, notificationsClient, actionsClient, workspaceRepository, orgsService, eventBus) {
        super(workspaceRepository);
        this.authClient = authClient;
        this.notificationsClient = notificationsClient;
        this.actionsClient = actionsClient;
        this.workspaceRepository = workspaceRepository;
        this.orgsService = orgsService;
        this.eventBus = eventBus;
    }
    async create(createWorkspaceDto, meta) {
        let id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, common_1.ModulesCodes.workspace, common_1.ModulesSettings.workspaceSettings);
        createWorkspaceDto.id = id;
        const workspace = this.workspaceRepository.create(Object.assign(Object.assign({}, createWorkspaceDto), { meta: meta }));
        return workspace;
    }
    async getAll(filterQuery, options) {
        return this.workspaceRepository.find(filterQuery, options);
    }
    async getAllWorkspaces(user, queryParams) {
        var _a, _b, _c, _d;
        const queryKeyMapper = { name: 'name' };
        const queryValueParser = {};
        const paginationQuery = (0, api_utils_1.getPaginationQuery)(queryParams, queryKeyMapper);
        const query = Object.assign(Object.assign({}, (0, api_utils_1.getFilterQuery)(JSON.parse(queryParams.filter || '{}'), queryKeyMapper, queryValueParser)), { "meta.orgInfo.code": user.meta.orgInfo.code });
        const workspaces = await this.workspaceRepository.aggregate(query, Object.assign(Object.assign({}, paginationQuery), { project: Object.assign({}, common_1.WorkspaceProjection) }));
        const users_ids = (_b = (_a = workspaces[0]) === null || _a === void 0 ? void 0 : _a.paginatedResults) === null || _b === void 0 ? void 0 : _b.map(workspace => workspace.users).flat();
        users_ids === null || users_ids === void 0 ? void 0 : users_ids.map(id => new mongodb_1.ObjectId(id));
        const usersMap = await (0, common_1.getUsersFromAuthMicroservice)(this.authClient, user, users_ids);
        workspaces[0].paginatedResults = (_d = (_c = workspaces[0]) === null || _c === void 0 ? void 0 : _c.paginatedResults) === null || _d === void 0 ? void 0 : _d.map((workspace) => {
            return Object.assign(Object.assign({}, workspace), { users: workspace.users.map(user => usersMap[user]) });
        });
        this.eventBus.publish(new events_handlers_1.AddWorkspaceEvent('ahmed'));
        return workspaces;
    }
};
WorkspaceService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(common_1.AUTH_SERVICE)),
    __param(1, (0, common_2.Inject)(common_1.NOTIFICATIONS_SERVICE)),
    __param(2, (0, common_2.Inject)(common_1.ACTIONS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object, typeof (_d = typeof dbhelper_1.WorkspaceRepository !== "undefined" && dbhelper_1.WorkspaceRepository) === "function" ? _d : Object, typeof (_e = typeof org_service_1.OrgsService !== "undefined" && org_service_1.OrgsService) === "function" ? _e : Object, typeof (_f = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _f : Object])
], WorkspaceService);
exports.WorkspaceService = WorkspaceService;


/***/ }),

/***/ "./apps/tuv-api/src/workspace/workspace.module.ts":
/*!********************************************************!*\
  !*** ./apps/tuv-api/src/workspace/workspace.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const dbhelper_1 = __webpack_require__(/*! @app/common/dbhelper */ "./libs/common/src/dbhelper/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const orgs_module_1 = __webpack_require__(/*! ../orgs/orgs.module */ "./apps/tuv-api/src/orgs/orgs.module.ts");
const workspace_controller_1 = __webpack_require__(/*! ./controllers/workspace.controller */ "./apps/tuv-api/src/workspace/controllers/workspace.controller.ts");
const workspace_service_1 = __webpack_require__(/*! ./services/workspace.service */ "./apps/tuv-api/src/workspace/services/workspace.service.ts");
let WorkspaceModule = class WorkspaceModule {
};
WorkspaceModule = __decorate([
    (0, common_2.Module)({
        imports: [
            orgs_module_1.OrgsModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_1.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            common_1.RmqModule.register({
                name: common_1.ACTIONS_SERVICE,
            }),
            common_1.RmqModule.register({
                name: common_1.NOTIFICATIONS_SERVICE,
            }),
            cqrs_1.CqrsModule,
            dbhelper_1.DbHelperModule
        ],
        controllers: [workspace_controller_1.WorkspacesController],
        providers: [
            workspace_service_1.WorkspaceService
        ],
        exports: [workspace_service_1.WorkspaceService],
    })
], WorkspaceModule);
exports.WorkspaceModule = WorkspaceModule;


/***/ }),

/***/ "./libs/common/src/auth/index.ts":
/*!***************************************!*\
  !*** ./libs/common/src/auth/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-auth.guard */ "./libs/common/src/auth/jwt-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/src/auth/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./libs/common/src/auth/jwt-auth.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const services_1 = __webpack_require__(/*! ../constants/services */ "./libs/common/src/constants/services.ts");
const Errors_factory_1 = __webpack_require__(/*! ../base/Errors.factory */ "./libs/common/src/base/Errors.factory.ts");
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
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./libs/common/src/base/Base.factory.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/base/Base.factory.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseFactory = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_1 = __webpack_require__(/*! ../database */ "./libs/common/src/database/index.ts");
const Errors_factory_1 = __webpack_require__(/*! ./Errors.factory */ "./libs/common/src/base/Errors.factory.ts");
let BaseFactory = class BaseFactory extends Errors_factory_1.ErrorsFactory {
    constructor(repository) {
        super();
        this.repository = repository;
    }
    async generateSequenceNumber(orgCode, moduleCode, target, options = {}) {
        const incQuery = {};
        incQuery[`moduleSettings.${target}.counter.value`] = 1;
        const orgSettings = await this.repository.findOneAndUpdate({ "meta.orgInfo.code": orgCode }, { $inc: incQuery });
        if (!orgSettings) {
            this.throwNotFoundError('org data is missing.');
        }
        const seqNumber = orgSettings.moduleSettings[target].counter.value;
        if (options.onlyNumber)
            return seqNumber.toString();
        if (!orgCode || !moduleCode || !seqNumber) {
            this.throwInternalServerError('org code, module code or seq number missing.');
        }
        return `${orgCode}-${moduleCode}-${seqNumber}`;
    }
};
BaseFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AbstractRepository !== "undefined" && database_1.AbstractRepository) === "function" ? _a : Object])
], BaseFactory);
exports.BaseFactory = BaseFactory;


/***/ }),

/***/ "./libs/common/src/base/Errors.factory.ts":
/*!************************************************!*\
  !*** ./libs/common/src/base/Errors.factory.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorsFactory = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ErrorsFactory = class ErrorsFactory {
    constructor() { }
    throwUnauthorisedError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNAUTHORIZED,
            error: errorMessage,
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
    throwBadRequestError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwBadRequestErrorForEInvoiceValidation(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwInternalServerError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            error: errorMessage,
        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    throwNotFoundError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: errorMessage,
        }, common_1.HttpStatus.NOT_FOUND);
    }
};
ErrorsFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ErrorsFactory);
exports.ErrorsFactory = ErrorsFactory;


/***/ }),

/***/ "./libs/common/src/base/base.controler.ts":
/*!************************************************!*\
  !*** ./libs/common/src/base/base.controler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class BaseController {
    formatResponse({ message = '', data, paginationList, }) {
        return {
            data,
            message,
            paginationList,
        };
    }
    throwUnauthorisedError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNAUTHORIZED,
            error: errorMessage,
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
    throwBadRequestError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwBadRequestErrorForEInvoiceValidation(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwInternalServerError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            error: errorMessage,
        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    throwNotFoundError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: errorMessage,
        }, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.BaseController = BaseController;


/***/ }),

/***/ "./libs/common/src/base/base.module.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/base/base.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BaseModule = class BaseModule {
};
BaseModule = __decorate([
    (0, common_1.Module)({})
], BaseModule);
exports.BaseModule = BaseModule;


/***/ }),

/***/ "./libs/common/src/base/index.ts":
/*!***************************************!*\
  !*** ./libs/common/src/base/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Base.factory */ "./libs/common/src/base/Base.factory.ts"), exports);
__exportStar(__webpack_require__(/*! ./Errors.factory */ "./libs/common/src/base/Errors.factory.ts"), exports);
__exportStar(__webpack_require__(/*! ./base.module */ "./libs/common/src/base/base.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./Base.factory */ "./libs/common/src/base/Base.factory.ts"), exports);
__exportStar(__webpack_require__(/*! ./base.controler */ "./libs/common/src/base/base.controler.ts"), exports);


/***/ }),

/***/ "./libs/common/src/constants/index.ts":
/*!********************************************!*\
  !*** ./libs/common/src/constants/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./services */ "./libs/common/src/constants/services.ts"), exports);
__exportStar(__webpack_require__(/*! ./query */ "./libs/common/src/constants/query.ts"), exports);


/***/ }),

/***/ "./libs/common/src/constants/query.ts":
/*!********************************************!*\
  !*** ./libs/common/src/constants/query.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_SKIP = exports.DEFAULT_PAGE = exports.DEFAULT_LIMIT = void 0;
exports.DEFAULT_LIMIT = 10;
exports.DEFAULT_PAGE = undefined;
exports.DEFAULT_SKIP = 0;


/***/ }),

/***/ "./libs/common/src/constants/services.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/constants/services.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ORDER_SERVICE = exports.ACTIONS_SERVICE = exports.NOTIFICATIONS_SERVICE = exports.AUTH_SERVICE = void 0;
exports.AUTH_SERVICE = 'auth';
exports.NOTIFICATIONS_SERVICE = 'NOTIFICATIONS';
exports.ACTIONS_SERVICE = 'ACTIONS';
exports.ORDER_SERVICE = 'ORDERS';


/***/ }),

/***/ "./libs/common/src/database/abstract.repository.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/database/abstract.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class AbstractRepository {
    constructor(model, connection) {
        this.model = model;
        this.connection = connection;
    }
    async create(document) {
        const createdDocument = new this.model(Object.assign(Object.assign({}, document), { _id: new mongoose_1.Types.ObjectId() }));
        return (await createdDocument.save()).toJSON();
    }
    async findOne(filterQuery, options) {
        const document = await this.model.findOne(filterQuery, options === null || options === void 0 ? void 0 : options.select, { lean: true });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneWithPopulate(filterQuery, options) {
        var _a, _b;
        const document = await this.model.findOne(filterQuery, options === null || options === void 0 ? void 0 : options.select, { lean: true }).populate({ path: (_a = options === null || options === void 0 ? void 0 : options.populate) === null || _a === void 0 ? void 0 : _a.path, select: (_b = options === null || options === void 0 ? void 0 : options.populate) === null || _b === void 0 ? void 0 : _b.select }).exec();
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            select: { id: 1, moduleSettings: 1 },
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async find(filterQuery, options) {
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const targetDocuments = await this.model.find(filterQuery, Object.assign({}, options === null || options === void 0 ? void 0 : options.select), { lean: true })
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .exec();
        return targetDocuments;
    }
    async findWithPopulate(filterQuery, options) {
        var _a, _b;
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const targetDocuments = await this.model.find(filterQuery, Object.assign({}, options.select), { lean: true })
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .populate({ path: (_a = options === null || options === void 0 ? void 0 : options.populate) === null || _a === void 0 ? void 0 : _a.path, select: (_b = options === null || options === void 0 ? void 0 : options.populate) === null || _b === void 0 ? void 0 : _b.select })
            .exec();
        return targetDocuments;
    }
    async findOneAndDelete(filterQuery) {
        return this.model.findOneAndDelete(filterQuery, { lean: true });
    }
    async createIndex(options) {
        return this.model.createIndexes(options);
    }
    async updateMany(filterQuery, update) {
        const documents = await this.model.updateMany(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!documents) {
            this.logger.warn('Documents not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Documents not found.');
        }
        return documents;
    }
    async update(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async aggregate(filterQuery, options) {
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const paginatedResults = [
            {
                $project: Object.assign({}, options.project),
            },
            { $sort: sort },
            { $skip: skip * limit },
            { $limit: limit },
        ];
        if (options === null || options === void 0 ? void 0 : options.otherQueryOptions) {
            paginatedResults.splice(1, 0, ...options === null || options === void 0 ? void 0 : options.otherQueryOptions);
        }
        const targetDocuments = await this.model.aggregate([
            { $match: filterQuery },
            {
                $facet: {
                    paginatedResults: paginatedResults,
                    totalCount: [
                        {
                            $count: 'count',
                        },
                    ],
                },
            },
        ]);
        return targetDocuments;
    }
    async aggregateWithCustomAggregateQuery(query) {
        const targetDocuments = await this.model.aggregate(query);
        return targetDocuments;
    }
    async startAndGetSession() {
        if (this.session)
            throw new Error('session already started for this helper');
        this.session = await this.connection.startSession();
        this.session.startTransaction();
        return this.session;
    }
}
exports.AbstractRepository = AbstractRepository;


/***/ }),

/***/ "./libs/common/src/database/abstract.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/abstract.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractDocument = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let AbstractDocument = class AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], AbstractDocument.prototype, "_id", void 0);
AbstractDocument = __decorate([
    (0, mongoose_1.Schema)()
], AbstractDocument);
exports.AbstractDocument = AbstractDocument;


/***/ }),

/***/ "./libs/common/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let DatabaseModule = class DatabaseModule {
    static forFeature(models) {
        return mongoose_1.MongooseModule.forFeature(models);
    }
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./libs/common/src/database/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/database/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/common/src/database/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.repository */ "./libs/common/src/database/abstract.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.schema */ "./libs/common/src/database/abstract.schema.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dbhelper/actions.repository.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/dbhelper/actions.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var ActionsRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionsRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ActionsRepository = ActionsRepository_1 = class ActionsRepository extends common_2.AbstractRepository {
    constructor(actionModel, connection) {
        super(actionModel, connection);
        this.logger = new common_1.Logger(ActionsRepository_1.name);
    }
};
ActionsRepository = ActionsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Action.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], ActionsRepository);
exports.ActionsRepository = ActionsRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/category.reporsitory.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dbhelper/category.reporsitory.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var CategoryRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let CategoryRepository = CategoryRepository_1 = class CategoryRepository extends common_2.AbstractRepository {
    constructor(categoryModel, connection) {
        super(categoryModel, connection);
        this.logger = new common_1.Logger(CategoryRepository_1.name);
    }
};
CategoryRepository = CategoryRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Category.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/dbhelper.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/dbhelper/dbhelper.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbHelperModule = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const actions_repository_1 = __webpack_require__(/*! ./actions.repository */ "./libs/common/src/dbhelper/actions.repository.ts");
const category_reporsitory_1 = __webpack_require__(/*! ./category.reporsitory */ "./libs/common/src/dbhelper/category.reporsitory.ts");
const noneRelease_reporsitory_1 = __webpack_require__(/*! ./noneRelease.reporsitory */ "./libs/common/src/dbhelper/noneRelease.reporsitory.ts");
const order_reporsitory_1 = __webpack_require__(/*! ./order.reporsitory */ "./libs/common/src/dbhelper/order.reporsitory.ts");
const orgs_repository_1 = __webpack_require__(/*! ./orgs.repository */ "./libs/common/src/dbhelper/orgs.repository.ts");
const product_repository_1 = __webpack_require__(/*! ./product.repository */ "./libs/common/src/dbhelper/product.repository.ts");
const release_repository_1 = __webpack_require__(/*! ./release.repository */ "./libs/common/src/dbhelper/release.repository.ts");
const roles_repository_1 = __webpack_require__(/*! ./roles.repository */ "./libs/common/src/dbhelper/roles.repository.ts");
const settings_reporsitory_1 = __webpack_require__(/*! ./settings.reporsitory */ "./libs/common/src/dbhelper/settings.reporsitory.ts");
const subCategory_reporsitory_1 = __webpack_require__(/*! ./subCategory.reporsitory */ "./libs/common/src/dbhelper/subCategory.reporsitory.ts");
const users_repository_1 = __webpack_require__(/*! ./users.repository */ "./libs/common/src/dbhelper/users.repository.ts");
const workflow_repository_1 = __webpack_require__(/*! ./workflow.repository */ "./libs/common/src/dbhelper/workflow.repository.ts");
const workspace_repository_1 = __webpack_require__(/*! ./workspace.repository */ "./libs/common/src/dbhelper/workspace.repository.ts");
let DbHelperModule = class DbHelperModule {
};
DbHelperModule = __decorate([
    (0, common_2.Module)({
        imports: [
            common_1.DatabaseModule,
            common_1.DatabaseModule.forFeature([
                { name: common_1.Action.name, schema: common_1.ActionSchema },
                { name: common_1.Category.name, schema: common_1.CategorySchema },
                { name: common_1.SubCategory.name, schema: common_1.SubCategorySchema },
                { name: common_1.NoneRelease.name, schema: common_1.NoneReleaseSchema },
                { name: common_1.Product.name, schema: common_1.ProductSchema },
                { name: common_1.Release.name, schema: common_1.ReleaseSchema },
                { name: common_1.Workflow.name, schema: common_1.WorkflowSchema },
                { name: common_1.User.name, schema: common_1.UserSchema },
                { name: common_1.Role.name, schema: common_1.RoleSchema },
                { name: common_1.Org.name, schema: common_1.OrgSchema },
                { name: common_1.Workspace.name, schema: common_1.WorkspaceSchema },
                { name: common_1.IamPolicy.name, schema: common_1.IamPolicySchema },
                { name: common_1.Settings.name, schema: common_1.SettingsSchema },
                { name: common_1.NoneRelease.name, schema: common_1.NoneReleaseSchema },
                { name: common_1.Release.name, schema: common_1.ReleaseSchema },
                { name: common_1.Order.name, schema: common_1.OrderSchema },
            ]),
        ],
        controllers: [],
        providers: [
            workspace_repository_1.WorkspaceRepository,
            category_reporsitory_1.CategoryRepository,
            subCategory_reporsitory_1.SubCategoryRepository,
            noneRelease_reporsitory_1.NoneReleaseRepository,
            order_reporsitory_1.OrderRepository,
            orgs_repository_1.OrgsRepository,
            product_repository_1.ProductRepository,
            release_repository_1.ReleaseRepository,
            settings_reporsitory_1.SettingsRepository,
            workflow_repository_1.WorkflowRepository,
            users_repository_1.UsersRepository,
            roles_repository_1.RolesRepository,
            actions_repository_1.ActionsRepository
        ],
        exports: [
            workspace_repository_1.WorkspaceRepository,
            category_reporsitory_1.CategoryRepository,
            subCategory_reporsitory_1.SubCategoryRepository,
            noneRelease_reporsitory_1.NoneReleaseRepository,
            order_reporsitory_1.OrderRepository,
            orgs_repository_1.OrgsRepository,
            product_repository_1.ProductRepository,
            release_repository_1.ReleaseRepository,
            settings_reporsitory_1.SettingsRepository,
            workflow_repository_1.WorkflowRepository,
            users_repository_1.UsersRepository,
            roles_repository_1.RolesRepository,
            actions_repository_1.ActionsRepository,
        ],
    })
], DbHelperModule);
exports.DbHelperModule = DbHelperModule;


/***/ }),

/***/ "./libs/common/src/dbhelper/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/dbhelper/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./dbhelper.module */ "./libs/common/src/dbhelper/dbhelper.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./category.reporsitory */ "./libs/common/src/dbhelper/category.reporsitory.ts"), exports);
__exportStar(__webpack_require__(/*! ./subCategory.reporsitory */ "./libs/common/src/dbhelper/subCategory.reporsitory.ts"), exports);
__exportStar(__webpack_require__(/*! ./workspace.repository */ "./libs/common/src/dbhelper/workspace.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./noneRelease.reporsitory */ "./libs/common/src/dbhelper/noneRelease.reporsitory.ts"), exports);
__exportStar(__webpack_require__(/*! ./order.reporsitory */ "./libs/common/src/dbhelper/order.reporsitory.ts"), exports);
__exportStar(__webpack_require__(/*! ./orgs.repository */ "./libs/common/src/dbhelper/orgs.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./product.repository */ "./libs/common/src/dbhelper/product.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./release.repository */ "./libs/common/src/dbhelper/release.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./settings.reporsitory */ "./libs/common/src/dbhelper/settings.reporsitory.ts"), exports);
__exportStar(__webpack_require__(/*! ./workflow.repository */ "./libs/common/src/dbhelper/workflow.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./actions.repository */ "./libs/common/src/dbhelper/actions.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./users.repository */ "./libs/common/src/dbhelper/users.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./roles.repository */ "./libs/common/src/dbhelper/roles.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./actions.repository */ "./libs/common/src/dbhelper/actions.repository.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dbhelper/noneRelease.reporsitory.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/dbhelper/noneRelease.reporsitory.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneReleaseRepository = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NoneReleaseRepository = class NoneReleaseRepository extends common_1.AbstractRepository {
    constructor(NoneReleaseModel, connection) {
        super(NoneReleaseModel, connection);
        this.logger = new common_2.Logger(common_1.NoneRelease.name);
    }
};
NoneReleaseRepository = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_1.NoneRelease.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], NoneReleaseRepository);
exports.NoneReleaseRepository = NoneReleaseRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/order.reporsitory.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dbhelper/order.reporsitory.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var OrderRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let OrderRepository = OrderRepository_1 = class OrderRepository extends common_2.AbstractRepository {
    constructor(OrderModel, connection) {
        super(OrderModel, connection);
        this.logger = new common_1.Logger(OrderRepository_1.name);
    }
};
OrderRepository = OrderRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Order.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], OrderRepository);
exports.OrderRepository = OrderRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/orgs.repository.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/dbhelper/orgs.repository.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var OrgsRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgsRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let OrgsRepository = OrgsRepository_1 = class OrgsRepository extends common_2.AbstractRepository {
    constructor(orgModel, connection) {
        super(orgModel, connection);
        this.logger = new common_1.Logger(OrgsRepository_1.name);
    }
};
OrgsRepository = OrgsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Org.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], OrgsRepository);
exports.OrgsRepository = OrgsRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/product.repository.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/dbhelper/product.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var ProductRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ProductRepository = ProductRepository_1 = class ProductRepository extends common_2.AbstractRepository {
    constructor(ProductModel, connection) {
        super(ProductModel, connection);
        this.logger = new common_1.Logger(ProductRepository_1.name);
    }
};
ProductRepository = ProductRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Product.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], ProductRepository);
exports.ProductRepository = ProductRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/release.repository.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/dbhelper/release.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseRepository = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ReleaseRepository = class ReleaseRepository extends common_1.AbstractRepository {
    constructor(ReleaseModel, connection) {
        super(ReleaseModel, connection);
        this.logger = new common_2.Logger(common_1.Release.name);
    }
};
ReleaseRepository = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_1.Release.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], ReleaseRepository);
exports.ReleaseRepository = ReleaseRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/roles.repository.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/dbhelper/roles.repository.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var RolesRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let RolesRepository = RolesRepository_1 = class RolesRepository extends common_2.AbstractRepository {
    constructor(rolesModel, connection) {
        super(rolesModel, connection);
        this.logger = new common_1.Logger(RolesRepository_1.name);
    }
};
RolesRepository = RolesRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Role.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], RolesRepository);
exports.RolesRepository = RolesRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/settings.reporsitory.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dbhelper/settings.reporsitory.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var SettingsRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let SettingsRepository = SettingsRepository_1 = class SettingsRepository extends common_2.AbstractRepository {
    constructor(SettingsModel, connection) {
        super(SettingsModel, connection);
        this.logger = new common_1.Logger(SettingsRepository_1.name);
    }
};
SettingsRepository = SettingsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Settings.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], SettingsRepository);
exports.SettingsRepository = SettingsRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/subCategory.reporsitory.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/dbhelper/subCategory.reporsitory.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var SubCategoryRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubCategoryRepository = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let SubCategoryRepository = SubCategoryRepository_1 = class SubCategoryRepository extends common_1.AbstractRepository {
    constructor(subCategoryModel, connection) {
        super(subCategoryModel, connection);
        this.logger = new common_2.Logger(SubCategoryRepository_1.name);
    }
};
SubCategoryRepository = SubCategoryRepository_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_1.SubCategory.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], SubCategoryRepository);
exports.SubCategoryRepository = SubCategoryRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/users.repository.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/dbhelper/users.repository.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var UsersRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let UsersRepository = UsersRepository_1 = class UsersRepository extends common_2.AbstractRepository {
    constructor(userModel, connection) {
        super(userModel, connection);
        this.logger = new common_1.Logger(UsersRepository_1.name);
    }
};
UsersRepository = UsersRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.User.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], UsersRepository);
exports.UsersRepository = UsersRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/workflow.repository.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/dbhelper/workflow.repository.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var WorkflowRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkflowRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let WorkflowRepository = WorkflowRepository_1 = class WorkflowRepository extends common_2.AbstractRepository {
    constructor(workflowModel, connection) {
        super(workflowModel, connection);
        this.logger = new common_1.Logger(WorkflowRepository_1.name);
    }
};
WorkflowRepository = WorkflowRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Workflow.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], WorkflowRepository);
exports.WorkflowRepository = WorkflowRepository;


/***/ }),

/***/ "./libs/common/src/dbhelper/workspace.repository.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dbhelper/workspace.repository.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var WorkspaceRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let WorkspaceRepository = WorkspaceRepository_1 = class WorkspaceRepository extends common_2.AbstractRepository {
    constructor(workspaceModel, connection) {
        super(workspaceModel, connection);
        this.logger = new common_1.Logger(WorkspaceRepository_1.name);
    }
};
WorkspaceRepository = WorkspaceRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Workspace.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], WorkspaceRepository);
exports.WorkspaceRepository = WorkspaceRepository;


/***/ }),

/***/ "./libs/common/src/decorators/current-user.decorator.ts":
/*!**************************************************************!*\
  !*** ./libs/common/src/decorators/current-user.decorator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const getCurrentUserByContext = (context) => {
    return context.switchToHttp().getRequest().user;
};
exports.CurrentUser = (0, common_1.createParamDecorator)((_data, context) => getCurrentUserByContext(context));


/***/ }),

/***/ "./libs/common/src/decorators/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/decorators/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./current-user.decorator */ "./libs/common/src/decorators/current-user.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./roles.decorator */ "./libs/common/src/decorators/roles.decorator.ts"), exports);


/***/ }),

/***/ "./libs/common/src/decorators/roles.decorator.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/decorators/roles.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),

/***/ "./libs/common/src/dto/api/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/dto/api/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IFindOptionsDto = exports.IBaseQueryParamsDto = exports.SortValidator = exports.FilterValidator = exports.FilterQueryDto = void 0;
const constants_1 = __webpack_require__(/*! @app/common/constants */ "./libs/common/src/constants/index.ts");
const interfaces_1 = __webpack_require__(/*! @app/common/interfaces */ "./libs/common/src/interfaces/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class FilterQueryDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        type: [String],
        default: [],
        required: false,
    }),
    __metadata("design:type", Array)
], FilterQueryDto.prototype, "values", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['text', 'date', 'set']),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'text',
        required: true,
        enum: ['text', 'date', 'set'],
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "filterType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)([
        'equals',
        'or',
        'contains',
        'lessThanOrEqual',
        'greaterThanOrEqual',
        'inRange',
    ]),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'equals',
        required: true,
        enum: [
            'equals',
            'or',
            'contains',
            'lessThanOrEqual',
            'greaterThanOrEqual',
            'inRange',
        ],
    }),
    __metadata("design:type", typeof (_a = typeof interfaces_1.IFilterQueryType !== "undefined" && interfaces_1.IFilterQueryType) === "function" ? _a : Object)
], FilterQueryDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: new Date().toString(),
        required: false,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: new Date().toString(),
        required: false,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "dateTo", void 0);
exports.FilterQueryDto = FilterQueryDto;
let FilterValidator = class FilterValidator {
    async validate(columnValue, args) {
        try {
            let isValidate = true;
            Object.keys(columnValue).forEach(async function eachKey(key) {
                if (key.length > 20 ||
                    typeof key !== 'string' ||
                    !(0, class_validator_1.isObject)(columnValue[key])) {
                    isValidate = false;
                }
                if ((0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(FilterQueryDto, columnValue[key])).length) {
                    isValidate = false;
                }
            });
            return isValidate;
        }
        catch (error) { }
    }
    isObject(objValue) {
        return (objValue &&
            typeof objValue === 'object' &&
            objValue.constructor === Object);
    }
    defaultMessage(args) {
        const params = args.constraints[0];
        if (!params.message)
            return `the ${args.property} is not validate`;
        else
            return params.message;
    }
};
FilterValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], FilterValidator);
exports.FilterValidator = FilterValidator;
let SortValidator = class SortValidator {
    async validate(item, args) {
        try {
            let isValidate = true;
            Object.keys(item).forEach(function eachKey(key) {
                if (item[key] !== 1 && item[key] !== -1) {
                    isValidate = false;
                }
            });
            return isValidate;
        }
        catch (error) { }
    }
    defaultMessage(args) {
        var _a;
        const params = (_a = args.constraints) === null || _a === void 0 ? void 0 : _a[0];
        if (!(params === null || params === void 0 ? void 0 : params.message))
            return `the ${args === null || args === void 0 ? void 0 : args.property} is not validate`;
        else
            return params === null || params === void 0 ? void 0 : params.message;
    }
};
SortValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], SortValidator);
exports.SortValidator = SortValidator;
class SortDto {
}
class FilterDto {
}
class IBaseQueryParamsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.Validate)(SortValidator),
    (0, swagger_1.ApiProperty)({
        type: SortDto,
        required: false,
        description: 'Sort',
        example: { name: 1 },
    }),
    __metadata("design:type", SortDto)
], IBaseQueryParamsDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.Validate)(FilterValidator),
    (0, swagger_1.ApiProperty)({
        type: FilterDto,
        required: false,
        description: 'Filters',
        example: {
            name: {
                type: 'contains',
                filterType: 'text',
                filter: 'name',
                values: ['name'],
            },
        },
    }),
    __metadata("design:type", FilterDto)
], IBaseQueryParamsDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || constants_1.DEFAULT_LIMIT),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Limit',
        example: constants_1.DEFAULT_LIMIT,
    }),
    __metadata("design:type", Number)
], IBaseQueryParamsDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : constants_1.DEFAULT_SKIP)),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'skip',
        example: constants_1.DEFAULT_SKIP,
    }),
    __metadata("design:type", Number)
], IBaseQueryParamsDto.prototype, "skip", void 0);
exports.IBaseQueryParamsDto = IBaseQueryParamsDto;
class IFindOptionsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 10),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Limit',
        example: 10,
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 1),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Page',
        example: 0,
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'skip',
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "skip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: typeof swagger_1.ApiProperty,
        description: 'populate',
        example: {},
    }),
    __metadata("design:type", typeof (_b = typeof mongoose_1.PopulateOptions !== "undefined" && mongoose_1.PopulateOptions) === "function" ? _b : Object)
], IFindOptionsDto.prototype, "populate", void 0);
exports.IFindOptionsDto = IFindOptionsDto;


/***/ }),

/***/ "./libs/common/src/dto/category-dtos/create-category.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/create-category.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategoryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCategoryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateCategoryDto.prototype, "meta", void 0);
exports.CreateCategoryDto = CreateCategoryDto;


/***/ }),

/***/ "./libs/common/src/dto/category-dtos/index.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-category.dto */ "./libs/common/src/dto/category-dtos/create-category.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-category.dto */ "./libs/common/src/dto/category-dtos/update-category.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/category-dtos/update-category.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/update-category.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategoryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateCategoryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "description", void 0);
exports.UpdateCategoryDto = UpdateCategoryDto;


/***/ }),

/***/ "./libs/common/src/dto/ids.dto/id.dto.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/dto/ids.dto/id.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class IdDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], IdDto.prototype, "id", void 0);
exports.IdDto = IdDto;


/***/ }),

/***/ "./libs/common/src/dto/ids.dto/index.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/dto/ids.dto/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./id.dto */ "./libs/common/src/dto/ids.dto/id.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/index.ts":
/*!**************************************!*\
  !*** ./libs/common/src/dto/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user-dtos */ "./libs/common/src/dto/user-dtos/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./category-dtos/index */ "./libs/common/src/dto/category-dtos/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./sub-category-dtos */ "./libs/common/src/dto/sub-category-dtos/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./product-dtos */ "./libs/common/src/dto/product-dtos/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workspace-dto */ "./libs/common/src/dto/workspace-dto/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./release */ "./libs/common/src/dto/release/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./none-release */ "./libs/common/src/dto/none-release/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./ids.dto */ "./libs/common/src/dto/ids.dto/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./api */ "./libs/common/src/dto/api/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/none-release/create-none-release.ts":
/*!*****************************************************************!*\
  !*** ./libs/common/src/dto/none-release/create-none-release.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateNoneReleaseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class CreateNoneReleaseDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], CreateNoneReleaseDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameImporter',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "nameImporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'entryPoint',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "entryPoint", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'detailsPackagesContainers',
        required: false,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importDocumentsNotMentionedCertificate',
        required: false,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'numberOfLineItems',
        required: false,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['Packages', 'Trucks', 'Partial Container', 'FullContainer']),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Packages',
        required: true,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "shipmentType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'shipmentDetails',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "shipmentDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateNoneReleaseDto.prototype, "totalQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateNoneReleaseDto.prototype, "incomingQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateNoneReleaseDto.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'comments',
        required: false,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "comments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'companyUsualDisclaimer',
        required: false,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNoneReleaseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateNoneReleaseDto.prototype, "meta", void 0);
exports.CreateNoneReleaseDto = CreateNoneReleaseDto;


/***/ }),

/***/ "./libs/common/src/dto/none-release/index.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/dto/none-release/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-none-release */ "./libs/common/src/dto/none-release/create-none-release.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-none-release */ "./libs/common/src/dto/none-release/update-none-release.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/none-release/update-none-release.ts":
/*!*****************************************************************!*\
  !*** ./libs/common/src/dto/none-release/update-none-release.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateNoneReleaseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateNoneReleaseDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameImporter',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "nameImporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'entryPoint',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "entryPoint", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'detailsPackagesContainers',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importDocumentsNotMentionedCertificate',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'numberOfLineItems',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(['Packages', 'Trucks', 'Partial Container', 'FullContainer']),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Packages',
        required: true,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "shipmentType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'shipmentDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "shipmentDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateNoneReleaseDto.prototype, "totalQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateNoneReleaseDto.prototype, "incomingQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateNoneReleaseDto.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'comments',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "comments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'companyUsualDisclaimer',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateNoneReleaseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateNoneReleaseDto.prototype, "meta", void 0);
exports.UpdateNoneReleaseDto = UpdateNoneReleaseDto;


/***/ }),

/***/ "./libs/common/src/dto/order-dtos/create-order.dto.ts":
/*!************************************************************!*\
  !*** ./libs/common/src/dto/order-dtos/create-order.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
const modles_1 = __webpack_require__(/*! @app/common/modles */ "./libs/common/src/modles/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'cocNo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "cocNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'registrationNo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "registrationNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'referenceNo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateOrderDto.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateOrderDto.prototype, "expDateOfCoc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importer',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "importer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerAddress',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "importerAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCountry',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "importerCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCity',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "importerCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporter',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "exporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterAddress',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "exporterAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCountry',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "exporterCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCity',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "exporterCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "invoiceAmount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceCurrency',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "invoiceCurrency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceNo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "invoiceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateOrderDto.prototype, "invoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'methodOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "methodOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'countryOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "countryOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "documentNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateOrderDto.prototype, "documentDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'declaredPointOfEntry',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "declaredPointOfEntry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'packingDetails',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "packingDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "numberAndTypeOfPackages", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'containersOrTruckDetails',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "containersOrTruckDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "containersOrTruckAndSealNumbers", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: modles_1.Products,
        default: [
            {
                qty: 1,
                goodsValue: '1',
                originAsMarkedOnGoods: '123',
                description: 'string',
                iQStandardNo: '1',
                product: '648b1a483bef2213783d613b',
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'remarks',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "remarks", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CreateOrderDto.prototype, "dateOfAssessment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 22,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "invoiceValueInUsd", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 33,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "declaredValuePerContainer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameAndSignature',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "nameAndSignature", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'officeIssuing',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "officeIssuing", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'logo',
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateOrderDto.prototype, "meta", void 0);
exports.CreateOrderDto = CreateOrderDto;


/***/ }),

/***/ "./libs/common/src/dto/order-dtos/index.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/dto/order-dtos/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-order.dto */ "./libs/common/src/dto/order-dtos/create-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-order.dto */ "./libs/common/src/dto/order-dtos/update-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-order-status.dto */ "./libs/common/src/dto/order-dtos/update-order-status.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/order-dtos/update-order-status.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/common/src/dto/order-dtos/update-order-status.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderStatusDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateOrderStatusDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['draft', 'partial-approved', 'approved', 'rejected']),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'draft',
        required: true,
        enum: ['draft', 'partial-approved', 'approved', 'rejected'],
    }),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "status", void 0);
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;


/***/ }),

/***/ "./libs/common/src/dto/order-dtos/update-order.dto.ts":
/*!************************************************************!*\
  !*** ./libs/common/src/dto/order-dtos/update-order.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDto = void 0;
const modles_1 = __webpack_require__(/*! @app/common/modles */ "./libs/common/src/modles/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'cocNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "cocNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'registrationNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "registrationNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'referenceNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateOrderDto.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateOrderDto.prototype, "expDateOfCoc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importer',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerAddress',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCountry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCity',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporter',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterAddress',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCountry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCity',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "invoiceAmount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceCurrency',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "invoiceCurrency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "invoiceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UpdateOrderDto.prototype, "invoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'methodOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "methodOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'countryOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "countryOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "documentNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UpdateOrderDto.prototype, "documentDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'declaredPointOfEntry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "declaredPointOfEntry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'packingDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "packingDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "numberAndTypeOfPackages", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'containersOrTruckDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "containersOrTruckDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "containersOrTruckAndSealNumbers", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: modles_1.Products,
        default: [
            {
                qty: 1,
                goodsValue: '1',
                originAsMarkedOnGoods: '123',
                description: 'string',
                iQStandardNo: '1',
                product: '648b1a483bef2213783d613b',
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], UpdateOrderDto.prototype, "products", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'remarks',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "remarks", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UpdateOrderDto.prototype, "dateOfAssessment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 22,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "invoiceValueInUsd", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 33,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "declaredValuePerContainer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameAndSignature',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "nameAndSignature", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'officeIssuing',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "officeIssuing", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'logo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "logo", void 0);
exports.UpdateOrderDto = UpdateOrderDto;


/***/ }),

/***/ "./libs/common/src/dto/product-dtos/create-product.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/create-product.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class CreateProductDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'description',
        required: false,
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '123',
        required: true,
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "qty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '$',
        required: true,
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], CreateProductDto.prototype, "subCategory", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: [String],
        default: [],
        required: true,
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProductDto.prototype, "meta", void 0);
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "./libs/common/src/dto/product-dtos/index.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-product.dto */ "./libs/common/src/dto/product-dtos/create-product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-product.dto */ "./libs/common/src/dto/product-dtos/update-product.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/product-dtos/update-product.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/update-product.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateProductDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'description',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '123',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "qty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '$',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "subCategory", void 0);
exports.UpdateProductDto = UpdateProductDto;


/***/ }),

/***/ "./libs/common/src/dto/release/create-release.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/release/create-release.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReleaseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class CreateReleaseDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], CreateReleaseDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameImporter',
        required: true,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "nameImporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'entryPoint',
        required: true,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "entryPoint", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'detailsPackagesContainers',
        required: false,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importDocumentsNotMentionedCertificate',
        required: false,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'numberOfLineItems',
        required: false,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Packages', 'Trucks', 'Partial Container', 'FullContainer']),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Packages',
        required: true,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "shipmentType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'shipmentDetails',
        required: true,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "shipmentDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateReleaseDto.prototype, "totalQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateReleaseDto.prototype, "incomingQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateReleaseDto.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'comments',
        required: false,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "comments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'companyUsualDisclaimer',
        required: false,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], CreateReleaseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateReleaseDto.prototype, "meta", void 0);
exports.CreateReleaseDto = CreateReleaseDto;


/***/ }),

/***/ "./libs/common/src/dto/release/index.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/dto/release/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-release */ "./libs/common/src/dto/release/create-release.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-release */ "./libs/common/src/dto/release/update-release.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/release/update-release.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/release/update-release.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReleaseDto = void 0;
const shared_schema_1 = __webpack_require__(/*! @app/common/modles/shared.schema */ "./libs/common/src/modles/shared.schema.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateReleaseDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '648b1a483bef2213783d613b',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameImporter',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "nameImporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'entryPoint',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "entryPoint", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'detailsPackagesContainers',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importDocumentsNotMentionedCertificate',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'numberOfLineItems',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Packages', 'Trucks', 'Partial Container', 'FullContainer']),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'Packages',
        required: true,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "shipmentType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'shipmentDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "shipmentDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateReleaseDto.prototype, "totalQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateReleaseDto.prototype, "incomingQuantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateReleaseDto.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'comments',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "comments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'companyUsualDisclaimer',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'name',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateReleaseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _a : Object)
], UpdateReleaseDto.prototype, "meta", void 0);
exports.UpdateReleaseDto = UpdateReleaseDto;


/***/ }),

/***/ "./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts":
/*!************************************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSubCategoryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class CreateSubCategoryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSubCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], CreateSubCategoryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], CreateSubCategoryDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], CreateSubCategoryDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSubCategoryDto.prototype, "meta", void 0);
exports.CreateSubCategoryDto = CreateSubCategoryDto;


/***/ }),

/***/ "./libs/common/src/dto/sub-category-dtos/index.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./updateSubCategory.dto */ "./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./createSubCategory.dto */ "./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts":
/*!************************************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSubCategoryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class UpdateSubCategoryDto {
    ;
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateSubCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateSubCategoryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], UpdateSubCategoryDto.prototype, "category", void 0);
exports.UpdateSubCategoryDto = UpdateSubCategoryDto;


/***/ }),

/***/ "./libs/common/src/dto/user-dtos/create-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/create-user.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user email',
        example: 'test@email.com'
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user first name',
        example: 'first name'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user last name',
        example: 'last name'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user position',
        example: 'section manager'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'user image',
        example: 'https://img.freepik.com/free-icon/user_318-159711.jpg'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user phone number',
        example: '+201111111111'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'user password',
        example: 'test password @1234'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        required: false,
        description: 'detect if  user is Primary user or not',
        example: true
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "isPrimary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [mongoose_1.Types.ObjectId],
        required: true,
        description: 'Array of MongoDB ObjectIDs, for User Roels',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    }),
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [mongoose_1.Types.ObjectId],
        required: false,
        description: 'Array of MongoDB ObjectIDs, for User Workspaces',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    }),
    (0, class_validator_1.IsMongoId)({ each: true }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "workspaces", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./libs/common/src/dto/user-dtos/get-user.dto.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/get-user.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class GetUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetUserDto.prototype, "id", void 0);
exports.GetUserDto = GetUserDto;


/***/ }),

/***/ "./libs/common/src/dto/user-dtos/index.ts":
/*!************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-user.dto */ "./libs/common/src/dto/user-dtos/create-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-user.dto */ "./libs/common/src/dto/user-dtos/update-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./get-user.dto */ "./libs/common/src/dto/user-dtos/get-user.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/user-dtos/update-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/update-user.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./libs/common/src/dto/workspace-dto/create-workspace.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/common/src/dto/workspace-dto/create-workspace.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateWorkspaceDto = exports.LocationDto = exports.AddressDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class AddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'address type',
        example: 'dubai workspace address type, example: home, office, etc.'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "addressType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace city',
        example: 'workspace city, example: dubai'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace street',
        example: 'workspace street, example: dubai street'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace province state',
        example: 'workspace province state, example: dubai province state'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "provinceState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace country',
        example: 'workspace country, example: UAE, USA, etc.'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace postalCode',
        example: 'workspace postalCode, example: 123456, 12345, etc.'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'workspace location latitude',
        example: 'workspace location latitude, example: 123456, 12345, etc.'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddressDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'workspace location longitude',
        example: 'workspace location longitude, example: 123456, 12345, etc.'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddressDto.prototype, "longitude", void 0);
exports.AddressDto = AddressDto;
class LocationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'location name',
        example: 'dubai workspace location'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LocationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'location description',
        example: 'workspace  location description'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LocationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AddressDto, required: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", AddressDto)
], LocationDto.prototype, "address", void 0);
exports.LocationDto = LocationDto;
class CreateWorkspaceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace name',
        example: 'dubai workspace'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'workspace description',
        example: 'workspace description'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [mongoose_1.Types.ObjectId],
        default: [],
        required: false,
        description: 'Array of MongoDB ObjectIDs, for User Roels',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    }),
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], CreateWorkspaceDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: LocationDto, required: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", LocationDto)
], CreateWorkspaceDto.prototype, "location", void 0);
exports.CreateWorkspaceDto = CreateWorkspaceDto;


/***/ }),

/***/ "./libs/common/src/dto/workspace-dto/index.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/dto/workspace-dto/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-workspace.dto */ "./libs/common/src/dto/workspace-dto/create-workspace.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/enums/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/enums/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./org.enum */ "./libs/common/src/enums/org.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.enum */ "./libs/common/src/enums/user.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./workspace.enum */ "./libs/common/src/enums/workspace.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./shared.enum */ "./libs/common/src/enums/shared.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./roles.enum */ "./libs/common/src/enums/roles.enum.ts"), exports);


/***/ }),

/***/ "./libs/common/src/enums/org.enum.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/enums/org.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgType = exports.OrgStatus = void 0;
var OrgStatus;
(function (OrgStatus) {
    OrgStatus["active"] = "ACTIVE";
    OrgStatus["inactive"] = "INACTIVE";
})(OrgStatus = exports.OrgStatus || (exports.OrgStatus = {}));
var OrgType;
(function (OrgType) {
    OrgType["regional\u0640office"] = "regional\u0640office";
})(OrgType = exports.OrgType || (exports.OrgType = {}));


/***/ }),

/***/ "./libs/common/src/enums/roles.enum.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/enums/roles.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemRoles = void 0;
var SystemRoles;
(function (SystemRoles) {
    SystemRoles["users_manager"] = "users_manager_role";
    SystemRoles["orgs_manager"] = "orgs_manager_role";
    SystemRoles["workspaces_manager"] = "workspaces_manager_role";
    SystemRoles["category_manager"] = "category_manager_role";
    SystemRoles["product_manager"] = "product_manager_role";
    SystemRoles["order_manager"] = "order_manager_role";
    SystemRoles["release_manager"] = "release_manager_role";
    SystemRoles["nonrelease_manager"] = "nonrelease_manager_role";
    SystemRoles["setting_manager"] = "setting_manager_role";
    SystemRoles["workflow_manager"] = "workflow_manager_role";
})(SystemRoles = exports.SystemRoles || (exports.SystemRoles = {}));


/***/ }),

/***/ "./libs/common/src/enums/shared.enum.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/enums/shared.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesSettings = exports.ModulesCodes = void 0;
var ModulesCodes;
(function (ModulesCodes) {
    ModulesCodes["org"] = "org";
    ModulesCodes["user"] = "user";
    ModulesCodes["workspace"] = "workspace";
    ModulesCodes["category"] = "category";
    ModulesCodes["subcategory"] = "subcategory";
    ModulesCodes["product"] = "product";
    ModulesCodes["workflow"] = "workflow";
    ModulesCodes["action"] = "action";
    ModulesCodes["order"] = "order";
    ModulesCodes["release"] = "release";
    ModulesCodes["nonrelease"] = "nonrelease";
})(ModulesCodes = exports.ModulesCodes || (exports.ModulesCodes = {}));
var ModulesSettings;
(function (ModulesSettings) {
    ModulesSettings["categorySettings"] = "categorySettings";
    ModulesSettings["subCategorySettings"] = "subCategorySettings";
    ModulesSettings["productSettings"] = "productSettings";
    ModulesSettings["userSettings"] = "userSettings";
    ModulesSettings["workspaceSettings"] = "workspaceSettings";
    ModulesSettings["nonReleaseSettings"] = "nonReleaseSettings";
    ModulesSettings["releaseSettings"] = "releaseSettings";
    ModulesSettings["orderSettings"] = "orderSettings";
    ModulesSettings["workflowSettings"] = "workflowSettings";
    ModulesSettings["actionSettings"] = "actionSettings";
})(ModulesSettings = exports.ModulesSettings || (exports.ModulesSettings = {}));


/***/ }),

/***/ "./libs/common/src/enums/user.enum.ts":
/*!********************************************!*\
  !*** ./libs/common/src/enums/user.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["active"] = "ACTIVE";
    UserStatus["inactive"] = "INACTIVE";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));


/***/ }),

/***/ "./libs/common/src/enums/workspace.enum.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/enums/workspace.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceStatus = void 0;
var WorkspaceStatus;
(function (WorkspaceStatus) {
    WorkspaceStatus["active"] = "ACTIVE";
    WorkspaceStatus["inactive"] = "INACTIVE";
})(WorkspaceStatus = exports.WorkspaceStatus || (exports.WorkspaceStatus = {}));


/***/ }),

/***/ "./libs/common/src/health/health.controller.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/health/health.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HealthController = class HealthController {
    health() {
        return true;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "health", null);
HealthController = __decorate([
    (0, common_1.Controller)('/')
], HealthController);
exports.HealthController = HealthController;


/***/ }),

/***/ "./libs/common/src/health/health.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/health/health.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const health_controller_1 = __webpack_require__(/*! ./health.controller */ "./libs/common/src/health/health.controller.ts");
let HealthModule = class HealthModule {
};
HealthModule = __decorate([
    (0, common_1.Module)({
        controllers: [health_controller_1.HealthController],
    })
], HealthModule);
exports.HealthModule = HealthModule;


/***/ }),

/***/ "./libs/common/src/health/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/health/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./health.module */ "./libs/common/src/health/health.module.ts"), exports);


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database */ "./libs/common/src/database/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./logger */ "./libs/common/src/logger/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./modles */ "./libs/common/src/modles/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./libs/common/src/constants/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./libs/common/src/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./health */ "./libs/common/src/health/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./decorators */ "./libs/common/src/decorators/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./libs/common/src/utils/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./enums */ "./libs/common/src/enums/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./prjections */ "./libs/common/src/prjections/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./rmq */ "./libs/common/src/rmq/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto */ "./libs/common/src/dto/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/interfaces/action.interface.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/interfaces/action.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/api.interface.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/interfaces/api.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/base.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/base.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/category.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/category.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/iam.policy.interface.ts":
/*!************************************************************!*\
  !*** ./libs/common/src/interfaces/iam.policy.interface.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/interfaces/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./base.interface */ "./libs/common/src/interfaces/base.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.interface */ "./libs/common/src/interfaces/user.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./api.interface */ "./libs/common/src/interfaces/api.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./shared.interface */ "./libs/common/src/interfaces/shared.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./org.interface */ "./libs/common/src/interfaces/org.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.interface */ "./libs/common/src/interfaces/role.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./iam.policy.interface */ "./libs/common/src/interfaces/iam.policy.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./workflow.interface */ "./libs/common/src/interfaces/workflow.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./subcategroy.interface */ "./libs/common/src/interfaces/subcategroy.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./workspace.interface */ "./libs/common/src/interfaces/workspace.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./settings.interface */ "./libs/common/src/interfaces/settings.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./release.interface */ "./libs/common/src/interfaces/release.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./product.interface */ "./libs/common/src/interfaces/product.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./nonerelease.interface */ "./libs/common/src/interfaces/nonerelease.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./category.interface */ "./libs/common/src/interfaces/category.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./action.interface */ "./libs/common/src/interfaces/action.interface.ts"), exports);


/***/ }),

/***/ "./libs/common/src/interfaces/nonerelease.interface.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/interfaces/nonerelease.interface.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/org.interface.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/interfaces/org.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/product.interface.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/interfaces/product.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/release.interface.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/interfaces/release.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/role.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/role.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/settings.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/settings.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/shared.interface.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/interfaces/shared.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/subcategroy.interface.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/interfaces/subcategroy.interface.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/user.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/user.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/workflow.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/workflow.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/interfaces/workspace.interface.ts":
/*!***********************************************************!*\
  !*** ./libs/common/src/interfaces/workspace.interface.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/logger/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/logger/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./logger.module */ "./libs/common/src/logger/logger.module.ts"), exports);


/***/ }),

/***/ "./libs/common/src/logger/logger.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/logger/logger.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            singleLine: true,
                            colorize: true,
                            customColors: 'err:red,info:blue',
                            messageFormat: '{levelLabel} - {pid} - url:{req.url} - {msg} - response status = {res.statusCode} - response time = {responseTime} ms ',
                        },
                    },
                },
            }),
        ],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ "./libs/common/src/modles/action.schema.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/modles/action.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionSchema = exports.Action = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Action = class Action extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'order',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Action.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _b : Object)
], Action.prototype, "meta", void 0);
Action = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Action);
exports.Action = Action;
exports.ActionSchema = mongoose_1.SchemaFactory.createForClass(Action);


/***/ }),

/***/ "./libs/common/src/modles/category.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/category.schema.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategorySchema = exports.Category = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Category = class Category extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_a = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _a : Object)
], Category.prototype, "meta", void 0);
Category = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Category);
exports.Category = Category;
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);


/***/ }),

/***/ "./libs/common/src/modles/iam.policy.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/modles/iam.policy.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IamPolicySchema = exports.IamPolicy = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let Policy = class Policy {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Policy.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String
    }),
    __metadata("design:type", String)
], Policy.prototype, "scope", void 0);
Policy = __decorate([
    (0, mongoose_1.Schema)()
], Policy);
let IamPolicy = class IamPolicy extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamPolicy.prototype, "policyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamPolicy.prototype, "controller", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Policy }),
    __metadata("design:type", Policy)
], IamPolicy.prototype, "policy", void 0);
IamPolicy = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], IamPolicy);
exports.IamPolicy = IamPolicy;
exports.IamPolicySchema = mongoose_1.SchemaFactory.createForClass(IamPolicy);


/***/ }),

/***/ "./libs/common/src/modles/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/modles/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action.schema */ "./libs/common/src/modles/action.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./category.schema */ "./libs/common/src/modles/category.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./none-release.document.schema */ "./libs/common/src/modles/none-release.document.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./org.schema */ "./libs/common/src/modles/org.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./product.schema */ "./libs/common/src/modles/product.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./release.document.schema */ "./libs/common/src/modles/release.document.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.schema */ "./libs/common/src/modles/role.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.schema */ "./libs/common/src/modles/user.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./workflow.schema */ "./libs/common/src/modles/workflow.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./workspace.schema */ "./libs/common/src/modles/workspace.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./subCategory.schema */ "./libs/common/src/modles/subCategory.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./order.schema */ "./libs/common/src/modles/order.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./iam.policy.schema */ "./libs/common/src/modles/iam.policy.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./settings.schema */ "./libs/common/src/modles/settings.schema.ts"), exports);


/***/ }),

/***/ "./libs/common/src/modles/none-release.document.schema.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/modles/none-release.document.schema.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneReleaseSchema = exports.NoneRelease = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NoneRelease = class NoneRelease extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'order',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], NoneRelease.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "nameImporter", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "entryPoint", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "shipmentType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "shipmentDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], NoneRelease.prototype, "totalQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], NoneRelease.prototype, "incomingQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], NoneRelease.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], NoneRelease.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _b : Object)
], NoneRelease.prototype, "meta", void 0);
NoneRelease = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], NoneRelease);
exports.NoneRelease = NoneRelease;
exports.NoneReleaseSchema = mongoose_1.SchemaFactory.createForClass(NoneRelease);


/***/ }),

/***/ "./libs/common/src/modles/order.schema.ts":
/*!************************************************!*\
  !*** ./libs/common/src/modles/order.schema.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSchema = exports.Order = exports.Products = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Products = class Products {
};
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Products.prototype, "qty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Products.prototype, "goodsValue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Products.prototype, "originAsMarkedOnGoods", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Products.prototype, "iQStandardNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "product", void 0);
Products = __decorate([
    (0, mongoose_1.Schema)()
], Products);
exports.Products = Products;
const ProductsSchema = mongoose_1.SchemaFactory.createForClass(Products);
let Order = class Order extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "cocNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "registrationNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "referenceNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Order.prototype, "issuanceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Order.prototype, "expDateOfCoc", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "importer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "importerAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "importerCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "importerCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "exporter", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "exporterAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "exporterCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "exporterCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "invoiceAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "invoiceCurrency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "invoiceNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Order.prototype, "invoiceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "methodOfShipment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "countryOfShipment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "documentNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Order.prototype, "documentDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "declaredPointOfEntry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "packingDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "numberAndTypeOfPackages", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "containersOrTruckDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "containersOrTruckAndSealNumbers", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [ProductsSchema],
    }),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "remarks", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Order.prototype, "dateOfAssessment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "invoiceValueInUsd", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "declaredValuePerContainer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "nameAndSignature", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "officeIssuing", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['draft', 'partial-approved', 'approved', 'rejected'],
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_f = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _f : Object)
], Order.prototype, "meta", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);


/***/ }),

/***/ "./libs/common/src/modles/org.schema.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/modles/org.schema.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgSchema = exports.Org = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Org = class Org extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Org.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Org.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Org.prototype, "orgDisplayName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Org.prototype, "orgLogo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Org.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof common_1.OrgStatus !== "undefined" && common_1.OrgStatus) === "function" ? _a : Object)
], Org.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.Location
    }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Location !== "undefined" && shared_schema_1.Location) === "function" ? _b : Object)
], Org.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.Contact
    }),
    __metadata("design:type", typeof (_c = typeof shared_schema_1.Contact !== "undefined" && shared_schema_1.Contact) === "function" ? _c : Object)
], Org.prototype, "contact", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", typeof (_d = typeof common_1.OrgType !== "undefined" && common_1.OrgType) === "function" ? _d : Object)
], Org.prototype, "orgType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.ModuleSettings,
    }),
    __metadata("design:type", typeof (_e = typeof shared_schema_1.ModuleSettings !== "undefined" && shared_schema_1.ModuleSettings) === "function" ? _e : Object)
], Org.prototype, "moduleSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_f = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _f : Object)
], Org.prototype, "meta", void 0);
Org = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Org);
exports.Org = Org;
exports.OrgSchema = mongoose_1.SchemaFactory.createForClass(Org);


/***/ }),

/***/ "./libs/common/src/modles/product.schema.ts":
/*!**************************************************!*\
  !*** ./libs/common/src/modles/product.schema.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSchema = exports.Product = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Product = class Product extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "qty", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'subcategory',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Product.prototype, "subCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        required: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _b : Object)
], Product.prototype, "meta", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);


/***/ }),

/***/ "./libs/common/src/modles/release.document.schema.ts":
/*!***********************************************************!*\
  !*** ./libs/common/src/modles/release.document.schema.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseSchema = exports.Release = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Release = class Release extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'order',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Release.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "nameImporter", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "entryPoint", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Release.prototype, "detailsPackagesContainers", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Release.prototype, "importDocumentsNotMentionedCertificate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Release.prototype, "numberOfLineItems", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "shipmentType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "shipmentDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Release.prototype, "totalQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Release.prototype, "incomingQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Release.prototype, "leftoverQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Release.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], Release.prototype, "companyUsualDisclaimer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Release.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _b : Object)
], Release.prototype, "meta", void 0);
Release = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Release);
exports.Release = Release;
exports.ReleaseSchema = mongoose_1.SchemaFactory.createForClass(Release);


/***/ }),

/***/ "./libs/common/src/modles/role.schema.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/modles/role.schema.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleSchema = exports.Role = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Role = class Role extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'iampolicies' }]),
    __metadata("design:type", Array)
], Role.prototype, "iampolicies", void 0);
Role = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Role);
exports.Role = Role;
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(Role);


/***/ }),

/***/ "./libs/common/src/modles/settings.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/settings.schema.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsSchema = exports.Settings = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Settings = class Settings extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Settings.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Settings.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Settings.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)([{
            type: shared_schema_1.Country,
        }]),
    __metadata("design:type", Array)
], Settings.prototype, "countries", void 0);
__decorate([
    (0, mongoose_1.Prop)([{
            type: shared_schema_1.Language,
        }]),
    __metadata("design:type", Array)
], Settings.prototype, "languages", void 0);
__decorate([
    (0, mongoose_1.Prop)([{
            type: shared_schema_1.IsdCodes,
        }]),
    __metadata("design:type", Array)
], Settings.prototype, "isdCodes", void 0);
Settings = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Settings);
exports.Settings = Settings;
exports.SettingsSchema = mongoose_1.SchemaFactory.createForClass(Settings);


/***/ }),

/***/ "./libs/common/src/modles/shared.schema.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/modles/shared.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsdCodes = exports.Language = exports.Country = exports.ModuleSettings = exports.ActionSettings = exports.WorkflowSettings = exports.OrderSettings = exports.ReleaseSettings = exports.NonReleaseSettings = exports.UserSettings = exports.WorkspaceSettings = exports.ProductSettings = exports.SubCategorySettings = exports.CategorySettings = exports.Counter = exports.Contact = exports.Location = exports.Address = exports.Meta = exports.UpdatedBy = exports.CreatedBy = exports.OrgInfo = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
class OrgInfo {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "name", void 0);
exports.OrgInfo = OrgInfo;
class CreatedBy {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatedBy.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatedBy.prototype, "performerId", void 0);
exports.CreatedBy = CreatedBy;
class UpdatedBy {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UpdatedBy.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UpdatedBy.prototype, "performerId", void 0);
exports.UpdatedBy = UpdatedBy;
let Meta = class Meta {
};
__decorate([
    (0, mongoose_1.Prop)({ type: OrgInfo }),
    __metadata("design:type", OrgInfo)
], Meta.prototype, "orgInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CreatedBy }),
    __metadata("design:type", CreatedBy)
], Meta.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UpdatedBy }),
    __metadata("design:type", UpdatedBy)
], Meta.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Meta.prototype, "createdDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Meta.prototype, "updatedDate", void 0);
Meta = __decorate([
    (0, mongoose_1.Schema)()
], Meta);
exports.Meta = Meta;
let Address = class Address {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "addressType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "provinceState", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "longitude", void 0);
Address = __decorate([
    (0, mongoose_1.Schema)()
], Address);
exports.Address = Address;
let Location = class Location {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Address }),
    __metadata("design:type", Address)
], Location.prototype, "address", void 0);
Location = __decorate([
    (0, mongoose_1.Schema)()
], Location);
exports.Location = Location;
let Contact = class Contact {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
Contact = __decorate([
    (0, mongoose_1.Schema)()
], Contact);
exports.Contact = Contact;
let Counter = class Counter {
};
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Counter.prototype, "start", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", Number)
], Counter.prototype, "value", void 0);
Counter = __decorate([
    (0, mongoose_1.Schema)()
], Counter);
exports.Counter = Counter;
class CategorySettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], CategorySettings.prototype, "counter", void 0);
exports.CategorySettings = CategorySettings;
class SubCategorySettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], SubCategorySettings.prototype, "counter", void 0);
exports.SubCategorySettings = SubCategorySettings;
class ProductSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ProductSettings.prototype, "counter", void 0);
exports.ProductSettings = ProductSettings;
class WorkspaceSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], WorkspaceSettings.prototype, "counter", void 0);
exports.WorkspaceSettings = WorkspaceSettings;
class UserSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], UserSettings.prototype, "counter", void 0);
exports.UserSettings = UserSettings;
class NonReleaseSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], NonReleaseSettings.prototype, "counter", void 0);
exports.NonReleaseSettings = NonReleaseSettings;
class ReleaseSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ReleaseSettings.prototype, "counter", void 0);
exports.ReleaseSettings = ReleaseSettings;
class OrderSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], OrderSettings.prototype, "counter", void 0);
exports.OrderSettings = OrderSettings;
class WorkflowSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], WorkflowSettings.prototype, "counter", void 0);
exports.WorkflowSettings = WorkflowSettings;
class ActionSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ActionSettings.prototype, "counter", void 0);
exports.ActionSettings = ActionSettings;
let ModuleSettings = class ModuleSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ type: CategorySettings }),
    __metadata("design:type", CategorySettings)
], ModuleSettings.prototype, "categorySettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: SubCategorySettings }),
    __metadata("design:type", SubCategorySettings)
], ModuleSettings.prototype, "subCategorySettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ProductSettings }),
    __metadata("design:type", ProductSettings)
], ModuleSettings.prototype, "productSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: WorkspaceSettings }),
    __metadata("design:type", WorkspaceSettings)
], ModuleSettings.prototype, "workspaceSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UserSettings }),
    __metadata("design:type", UserSettings)
], ModuleSettings.prototype, "userSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: NonReleaseSettings }),
    __metadata("design:type", NonReleaseSettings)
], ModuleSettings.prototype, "nonReleaseSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ReleaseSettings }),
    __metadata("design:type", ReleaseSettings)
], ModuleSettings.prototype, "releaseSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: OrderSettings }),
    __metadata("design:type", OrderSettings)
], ModuleSettings.prototype, "orderSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: WorkflowSettings }),
    __metadata("design:type", WorkflowSettings)
], ModuleSettings.prototype, "workflowSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ActionSettings }),
    __metadata("design:type", ActionSettings)
], ModuleSettings.prototype, "actionSettings", void 0);
ModuleSettings = __decorate([
    (0, mongoose_1.Schema)()
], ModuleSettings);
exports.ModuleSettings = ModuleSettings;
let Country = class Country {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Country.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
Country = __decorate([
    (0, mongoose_1.Schema)()
], Country);
exports.Country = Country;
let Language = class Language {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Language.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Language.prototype, "code", void 0);
Language = __decorate([
    (0, mongoose_1.Schema)()
], Language);
exports.Language = Language;
let IsdCodes = class IsdCodes {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "name", void 0);
IsdCodes = __decorate([
    (0, mongoose_1.Schema)()
], IsdCodes);
exports.IsdCodes = IsdCodes;


/***/ }),

/***/ "./libs/common/src/modles/subCategory.schema.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/modles/subCategory.schema.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubCategorySchema = exports.SubCategory = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let SubCategory = class SubCategory extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _b : Object)
], SubCategory.prototype, "meta", void 0);
SubCategory = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], SubCategory);
exports.SubCategory = SubCategory;
exports.SubCategorySchema = mongoose_1.SchemaFactory.createForClass(SubCategory);


/***/ }),

/***/ "./libs/common/src/modles/user.schema.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/modles/user.schema.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let User = class User extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: "ACTIVE",
    }),
    __metadata("design:type", typeof (_a = typeof common_1.UserStatus !== "undefined" && common_1.UserStatus) === "function" ? _a : Object)
], User.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "blocked", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "securityCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], User.prototype, "remainingResetAttempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], User.prototype, "passwordChangedEpoch", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isPrimary", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'roles' }]),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'workspaces' }]),
    __metadata("design:type", Array)
], User.prototype, "workspaces", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "lastLoggedIn", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_c = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _c : Object)
], User.prototype, "meta", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./libs/common/src/modles/workflow.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/workflow.schema.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkflowSchema = exports.Workflow = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
let Workflow = class Workflow extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Workflow.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_a = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _a : Object)
], Workflow.prototype, "meta", void 0);
Workflow = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Workflow);
exports.Workflow = Workflow;
exports.WorkflowSchema = mongoose_1.SchemaFactory.createForClass(Workflow);


/***/ }),

/***/ "./libs/common/src/modles/workspace.schema.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/modles/workspace.schema.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceSchema = exports.Workspace = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const shared_schema_1 = __webpack_require__(/*! ./shared.schema */ "./libs/common/src/modles/shared.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Workspace = class Workspace extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'users' }]),
    __metadata("design:type", Array)
], Workspace.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", typeof (_a = typeof common_1.WorkspaceStatus !== "undefined" && common_1.WorkspaceStatus) === "function" ? _a : Object)
], Workspace.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Location }),
    __metadata("design:type", typeof (_b = typeof shared_schema_1.Location !== "undefined" && shared_schema_1.Location) === "function" ? _b : Object)
], Workspace.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", typeof (_c = typeof shared_schema_1.Meta !== "undefined" && shared_schema_1.Meta) === "function" ? _c : Object)
], Workspace.prototype, "meta", void 0);
Workspace = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Workspace);
exports.Workspace = Workspace;
exports.WorkspaceSchema = mongoose_1.SchemaFactory.createForClass(Workspace);


/***/ }),

/***/ "./libs/common/src/prjections/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/prjections/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workspace.project */ "./libs/common/src/prjections/workspace.project.ts"), exports);
__exportStar(__webpack_require__(/*! ./roles.project */ "./libs/common/src/prjections/roles.project.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.project */ "./libs/common/src/prjections/user.project.ts"), exports);


/***/ }),

/***/ "./libs/common/src/prjections/roles.project.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/prjections/roles.project.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesProjection = void 0;
exports.RolesProjection = {
    _id: 1,
    status: 1,
    code: 1,
    name: 1,
    description: 1,
    iampolicies: 1,
    id: 1
};


/***/ }),

/***/ "./libs/common/src/prjections/user.project.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/prjections/user.project.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProjection = void 0;
exports.UserProjection = {
    _id: 1,
    id: 1,
    firstName: 1,
    lastName: 1,
    email: 1,
    image: 1,
    position: 1,
};


/***/ }),

/***/ "./libs/common/src/prjections/workspace.project.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/prjections/workspace.project.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceProjection = void 0;
exports.WorkspaceProjection = {
    _id: 1,
    id: 1,
    name: 1,
    description: 1,
    users: 1,
    location: 1,
    createdAt: 1,
    updatedAt: 1
};


/***/ }),

/***/ "./libs/common/src/rmq/index.ts":
/*!**************************************!*\
  !*** ./libs/common/src/rmq/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./rmq.module */ "./libs/common/src/rmq/rmq.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./rmq.service */ "./libs/common/src/rmq/rmq.service.ts"), exports);


/***/ }),

/***/ "./libs/common/src/rmq/rmq.module.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/rmq/rmq.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RmqModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmqModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rmq_service_1 = __webpack_require__(/*! ./rmq.service */ "./libs/common/src/rmq/rmq.service.ts");
let RmqModule = RmqModule_1 = class RmqModule {
    static register({ name }) {
        return {
            module: RmqModule_1,
            imports: [
                microservices_1.ClientsModule.registerAsync([
                    {
                        name,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.RMQ,
                            options: {
                                urls: [configService.get('RABBIT_MQ_URI')],
                                queue: configService.get(`RABBIT_MQ_QUEUE_${name}`),
                            },
                        }),
                        inject: [config_1.ConfigService],
                    },
                ]),
            ],
            exports: [microservices_1.ClientsModule],
        };
    }
};
RmqModule = RmqModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [rmq_service_1.RmqService],
        exports: [rmq_service_1.RmqService],
    })
], RmqModule);
exports.RmqModule = RmqModule;


/***/ }),

/***/ "./libs/common/src/rmq/rmq.service.ts":
/*!********************************************!*\
  !*** ./libs/common/src/rmq/rmq.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmqService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RmqService = class RmqService {
    constructor(configService) {
        this.configService = configService;
    }
    getOptions(queue, noAck = false) {
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [this.configService.get('RABBIT_MQ_URI')],
                queue: this.configService.get(`RABBIT_MQ_QUEUE_${queue}`),
                noAck,
                persistent: true,
            },
        };
    }
    ack(context) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMessage();
        channel.ack(originalMessage);
    }
};
RmqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RmqService);
exports.RmqService = RmqService;


/***/ }),

/***/ "./libs/common/src/swagger/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/swagger/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const SWAGGER_CONFIG = {
    title: 'TUV management system',
    description: 'here all apis with test using swagger and nest js.',
    version: '1.0',
    tags: [],
};
function createDocument(app) {
    const builder = new swagger_1.DocumentBuilder()
        .setTitle(SWAGGER_CONFIG.title)
        .setDescription(SWAGGER_CONFIG.description)
        .addBearerAuth()
        .setVersion(SWAGGER_CONFIG.version);
    for (const tag of SWAGGER_CONFIG.tags) {
        builder.addTag(tag);
    }
    const options = builder.build();
    return swagger_1.SwaggerModule.createDocument(app, options);
}
exports.createDocument = createDocument;


/***/ }),

/***/ "./libs/common/src/utils/api.utils.ts":
/*!********************************************!*\
  !*** ./libs/common/src/utils/api.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMeta = exports.getFilterQuery = exports.getPaginationForAggregaateQueryHelper = exports.getPaginationQuery = void 0;
const getPaginationQuery = (queryParams, keyMapper = {}) => {
    let sort = queryParams.sort;
    if (sort && keyMapper[sort]) {
        const sortField = keyMapper[sort];
        Array.isArray(sortField)
            ? (sort = sortField.map((x) => [x]))
            : (sort = sortField);
    }
    else if (sort && keyMapper[sort.substring(1)]) {
        const sortField = keyMapper[sort.substring(1)];
        Array.isArray(sortField)
            ? (sort = sortField.map((x) => [`-${x}`]))
            : (sort = `-${sortField}`);
    }
    else {
        sort = { createdAt: -1 };
    }
    return {
        sort: sort,
        limit: +queryParams.limit || 10,
        page: +queryParams.page || 0,
        skip: +queryParams.skip || 0,
    };
};
exports.getPaginationQuery = getPaginationQuery;
const getPaginationForAggregaateQueryHelper = (queryParams, keyMapper = {}) => {
    let sort = queryParams.sort;
    if (sort && keyMapper[sort]) {
        sort = { [keyMapper[sort]]: 1 };
    }
    else if (sort && keyMapper[sort.substring(1)]) {
        sort = { [keyMapper[sort.substring(1)]]: -1 };
    }
    return {
        sort: sort,
        limit: +queryParams.limit || 10,
        page: +queryParams.page || 0,
        skip: +queryParams.skip,
    };
};
exports.getPaginationForAggregaateQueryHelper = getPaginationForAggregaateQueryHelper;
const getQuery = (filter, keyValueParser) => {
    if (filter.type === 'equals') {
        return keyValueParser(filter.filter);
    }
    else if (filter.type === 'or') {
        return { $in: filter.filter.split(',') };
    }
    else if (filter.type === 'contains') {
        return new RegExp(keyValueParser(filter.filter), 'i');
    }
    else if (filter.type === 'lessThanOrEqual') {
        return { $lte: keyValueParser(filter.filter) };
    }
    else if (filter.type === 'greaterThanOrEqual') {
        return { $gte: keyValueParser(filter.filter) };
    }
    else if (filter.type === 'inRange') {
        return {
            $gte: keyValueParser(filter.filter),
            $lte: keyValueParser(filter.filterTo),
        };
    }
    else if (typeof filter !== 'object') {
        return keyValueParser(filter);
    }
    else if (Array.isArray(filter)) {
        return { $in: filter.map(keyValueParser) };
    }
    else if (filter.filterType === 'set') {
        return { $in: filter.values };
    }
};
const getFilterQuery = (filter, keyMapper = {}, valueParser = {}) => {
    if (!filter)
        return {};
    let query = {};
    Object.keys(filter).forEach((key) => {
        const queryKey = keyMapper[key] || key;
        const keyValueParser = valueParser[key] || ((val) => val);
        if (Array.isArray(queryKey)) {
            const _query = getQuery(filter[key], keyValueParser);
            query.$or = query.$or || [];
            queryKey.forEach((k) => {
                query.$or.push({ [k]: _query });
            });
        }
        else {
            if (filter[key].filterType === 'date') {
                if (filter[key].type === 'greaterThanOrEqual') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $gte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                },
                            },
                        ] });
                }
                else if (filter[key].type === 'lessThanOrEqual') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $lte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                },
                            },
                        ] });
                }
                else if (filter[key].type === 'inRange') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $and: [
                                        {
                                            $gte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                        },
                                        {
                                            $lte: [`$${queryKey}`, { $toDate: filter[key].dateTo }],
                                        },
                                    ],
                                },
                            },
                        ] });
                }
            }
            if (filter[key].filterType !== 'date') {
                query[queryKey] = getQuery(filter[key], keyValueParser);
            }
        }
    });
    return query;
};
exports.getFilterQuery = getFilterQuery;
const getMeta = (meta, userId) => {
    meta = Object.assign(Object.assign({}, meta), { createdBy: { orgId: meta.orgInfo.id, performerId: userId }, updatedBy: { orgId: meta.orgInfo.id, performerId: userId }, updatedDate: new Date(), createdDate: new Date() });
    return meta;
};
exports.getMeta = getMeta;


/***/ }),

/***/ "./libs/common/src/utils/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/utils/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.utils */ "./libs/common/src/utils/user.utils.ts"), exports);


/***/ }),

/***/ "./libs/common/src/utils/user.utils.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/utils/user.utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUsersFromAuthMicroservice = exports._test = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const _test = () => {
    return 'test';
};
exports._test = _test;
const getUsersFromAuthMicroservice = async (authClient, user, users_ids) => {
    try {
        let data = authClient.send('users', { "code": user.meta.orgInfo.code, _ids: users_ids }).pipe((0, rxjs_1.take)(100));
        let users = await (0, rxjs_1.lastValueFrom)(data);
        const usersMap = (0, lodash_1.keyBy)(users, '_id');
        return usersMap;
    }
    catch (error) {
        throw error;
    }
};
exports.getUsersFromAuthMicroservice = getUsersFromAuthMicroservice;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/tuv-api/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/tuv-api/src/app.module.ts");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_2 = __webpack_require__(/*! @app/common/swagger */ "./libs/common/src/swagger/index.ts");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const cors = __webpack_require__(/*! cors */ "cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '10mb' }));
    swagger_1.SwaggerModule.setup('docs', app, (0, swagger_2.createDocument)(app));
    const configService = app.get(config_1.ConfigService);
    app.use(cors());
    await app.listen(configService.get('PORT'));
    common_2.Logger.log(`TUV-API APP IS Listening on port ${configService.get('PORT')}`);
}
bootstrap();

})();

/******/ })()
;