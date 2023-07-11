/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/uploader/src/cloud-providers/binding/index.ts":
/*!************************************************************!*\
  !*** ./apps/uploader/src/cloud-providers/binding/index.ts ***!
  \************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./media-upload.factory */ "./apps/uploader/src/cloud-providers/binding/media-upload.factory.ts"), exports);
                __exportStar(__webpack_require__(/*! ./media-upload.module */ "./apps/uploader/src/cloud-providers/binding/media-upload.module.ts"), exports);


                /***/
}),

/***/ "./apps/uploader/src/cloud-providers/binding/media-upload.factory.ts":
/*!***************************************************************************!*\
  !*** ./apps/uploader/src/cloud-providers/binding/media-upload.factory.ts ***!
  \***************************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.MediaUploadFactory = void 0;
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                let MediaUploadFactory = class MediaUploadFactory {
                    constructor() {
                        this.allowedMimeTypes = [
                            'image/png',
                            'image/jpeg',
                            'application/pdf',
                            'image/svg+xml',
                            'image/gif',
                            'image/ief',
                            'application/vnd.ms-excel',
                            'application/msword',
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        ];
                        this.allowedFileExtensions = ['png', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'gif', 'svg', 'ief', 'xls', 'xlsx', 'doc', 'docx', 'pdf'];
                        this.invalidFileNameRegex = /[`!@#$%^*+\=\;':"\\|<>\/?~]/;
                    }
                    getFileName(file, orgCode, entity, mediaType) {
                        const now = Math.ceil(new Date().getTime() / 1000);
                        const fileNameNormalised = file.originalname.split(' ').join('_');
                        const fileName = `${orgCode}/${entity}/${mediaType}/${now}-${fileNameNormalised}`;
                        return fileName;
                    }
                    generalUpload(file, mediaType, entity, res) {
                        throw new Error('Method not implemented, please set MEDIA_UPLOAD_STRATEGY in env to an accepted value');
                    }
                    uploadMedia(file, mediaType, entity, res, orgCode) {
                        throw new Error('Method not implemented, please set MEDIA_UPLOAD_STRATEGY in env to an accepted value');
                    }
                    isMediaTypeValid(mimetype, fileName) {
                        const extention = fileName.split('.').pop();
                        return this.allowedMimeTypes.includes(mimetype) && this.allowedFileExtensions.includes(extention ? extention.toLowerCase() : '');
                    }
                    isValidFileName(fileName) {
                        return !this.invalidFileNameRegex.test(fileName);
                    }
                    isExecutable(file) {
                        return file.buffer.toString('utf8', 0, 2) == '#!';
                    }
                };
                MediaUploadFactory = __decorate([
                    (0, common_1.Injectable)()
                ], MediaUploadFactory);
                exports.MediaUploadFactory = MediaUploadFactory;


                /***/
}),

/***/ "./apps/uploader/src/cloud-providers/binding/media-upload.module.ts":
/*!**************************************************************************!*\
  !*** ./apps/uploader/src/cloud-providers/binding/media-upload.module.ts ***!
  \**************************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                var MediaUploadModule_1;
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.MediaUploadModule = void 0;
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                const enums_1 = __webpack_require__(/*! ../../enums */ "./apps/uploader/src/enums/index.ts");
                const google_uploader_1 = __webpack_require__(/*! ../gcp/google.uploader */ "./apps/uploader/src/cloud-providers/gcp/google.uploader.ts");
                const media_upload_factory_1 = __webpack_require__(/*! ./media-upload.factory */ "./apps/uploader/src/cloud-providers/binding/media-upload.factory.ts");
                let MediaUploadModule = MediaUploadModule_1 = class MediaUploadModule {
                    static register() {
                        const MediaUploadClassProvider = MediaUploadModule_1.getClassProvider();
                        return {
                            module: MediaUploadModule_1,
                            providers: [MediaUploadClassProvider],
                            exports: [MediaUploadClassProvider],
                        };
                    }
                    static getClassProvider() {
                        const MediaUploaderClass = MediaUploadModule_1.getClassFromStrategy(enums_1.MEDIA_UPLOAD_STRATEGY['GOOGLE']);
                        return {
                            provide: media_upload_factory_1.MediaUploadFactory,
                            useClass: MediaUploaderClass,
                        };
                    }
                    static getClassFromStrategy(strategy) {
                        switch (strategy) {
                            case enums_1.MEDIA_UPLOAD_STRATEGY.GOOGLE:
                                return google_uploader_1.GoogleUploader;
                            default:
                                return google_uploader_1.GoogleUploader;
                        }
                    }
                };
                MediaUploadModule = MediaUploadModule_1 = __decorate([
                    (0, common_1.Module)({})
                ], MediaUploadModule);
                exports.MediaUploadModule = MediaUploadModule;


                /***/
}),

/***/ "./apps/uploader/src/cloud-providers/gcp/google.uploader.ts":
/*!******************************************************************!*\
  !*** ./apps/uploader/src/cloud-providers/gcp/google.uploader.ts ***!
  \******************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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
                exports.GoogleUploader = void 0;
                const storage_1 = __webpack_require__(/*! @google-cloud/storage */ "@google-cloud/storage");
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
                const stream = __webpack_require__(/*! stream */ "stream");
                const binding_1 = __webpack_require__(/*! ../binding */ "./apps/uploader/src/cloud-providers/binding/index.ts");
                let GoogleUploader = class GoogleUploader extends binding_1.MediaUploadFactory {
                    constructor(configService) {
                        super();
                        this.configService = configService;
                        this.gcs = new storage_1.Storage({});
                    }
                    onModuleInit() {
                        this.gcs = new storage_1.Storage({
                            projectId: this.configService.get('PROJECT_ID'),
                            credentials: {
                                client_email: this.configService.get('CLIENT_EMAIL'),
                                private_key: this.configService.get('PRIVATE_KEY'),
                            },
                        });
                        this.BUCKET_NAME = this.configService.get('BUCKET');
                    }
                    generalUpload(file, mediaType, entity, res) {
                        this.uploadMedia(file, mediaType, entity, res, 'tuv');
                    }
                    async uploadMedia(file, mediaType, entity, res, orgCode) {
                        let uploadStatus = {};
                        if (!this.isMediaTypeValid(file.mimetype, file.originalname)) {
                            uploadStatus = {
                                status: 'failure',
                                error: `Invalid file type`,
                            };
                            res.status(common_1.HttpStatus.BAD_REQUEST).send(uploadStatus);
                        }
                        if (!this.isValidFileName(file.originalname)) {
                            uploadStatus = {
                                status: 'failure',
                                error: `File names which contains special characters  \`!@#$%^&*+\=\;':"\\|,<>\/?~  are not allowed`,
                            };
                            res.status(common_1.HttpStatus.BAD_REQUEST).send(uploadStatus);
                        }
                        if (this.isExecutable(file)) {
                            uploadStatus = {
                                status: 'failure',
                                error: ` Executable files are not allowed`,
                            };
                            res.status(common_1.HttpStatus.BAD_REQUEST).send(uploadStatus);
                        }
                        const fileName = this.getFileName(file, orgCode, entity, mediaType);
                        const bucket = this.gcs.bucket('tuv-media');
                        const bufferStream = new stream.PassThrough();
                        bufferStream.end(Buffer.from(file.buffer, file.encoding));
                        const gcFile = bucket.file(fileName);
                        bufferStream
                            .pipe(gcFile.createWriteStream({
                                contentType: file.mimetype,
                                gzip: false,
                                resumable: false,
                            }))
                            .on('error', (err) => {
                                uploadStatus = {
                                    status: 'failure',
                                    error: err,
                                };
                                console.log(err);
                                res.send(uploadStatus);
                            })
                            .on('finish', () => {
                                console.log(fileName + ' uploaded successfully');
                                uploadStatus = {
                                    status: 'success',
                                    path: `https://storage.googleapis.com/${this.BUCKET_NAME}/${fileName}`,
                                };
                                res.send({ uploadStatus });
                            });
                    }
                };
                GoogleUploader = __decorate([
                    (0, common_1.Injectable)(),
                    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
                ], GoogleUploader);
                exports.GoogleUploader = GoogleUploader;


                /***/
}),

/***/ "./apps/uploader/src/cloud-providers/index.ts":
/*!****************************************************!*\
  !*** ./apps/uploader/src/cloud-providers/index.ts ***!
  \****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./binding */ "./apps/uploader/src/cloud-providers/binding/index.ts"), exports);


                /***/
}),

/***/ "./apps/uploader/src/dtos/file.uploader.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/uploader/src/dtos/file.uploader.dto.ts ***!
  \*****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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
                exports.FileUploadDto = void 0;
                const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
                class FileUploadDto {
                }
                __decorate([
                    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
                    __metadata("design:type", Object)
                ], FileUploadDto.prototype, "file", void 0);
                exports.FileUploadDto = FileUploadDto;


                /***/
}),

/***/ "./apps/uploader/src/enums/index.ts":
/*!******************************************!*\
  !*** ./apps/uploader/src/enums/index.ts ***!
  \******************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./providers.enum */ "./apps/uploader/src/enums/providers.enum.ts"), exports);


                /***/
}),

/***/ "./apps/uploader/src/enums/providers.enum.ts":
/*!***************************************************!*\
  !*** ./apps/uploader/src/enums/providers.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.MEDIA_UPLOAD_STRATEGY = exports.PROVIDERS = void 0;
                var PROVIDERS;
                (function (PROVIDERS) {
                    PROVIDERS["imagesBucket"] = "api-media";
                })(PROVIDERS = exports.PROVIDERS || (exports.PROVIDERS = {}));
                ;
                var MEDIA_UPLOAD_STRATEGY;
                (function (MEDIA_UPLOAD_STRATEGY) {
                    MEDIA_UPLOAD_STRATEGY["GOOGLE"] = "GOOGLE";
                    MEDIA_UPLOAD_STRATEGY["AWS"] = "AWS";
                    MEDIA_UPLOAD_STRATEGY["AZURE"] = "AZURE";
                })(MEDIA_UPLOAD_STRATEGY = exports.MEDIA_UPLOAD_STRATEGY || (exports.MEDIA_UPLOAD_STRATEGY = {}));


                /***/
}),

/***/ "./apps/uploader/src/uploader.controller.ts":
/*!**************************************************!*\
  !*** ./apps/uploader/src/uploader.controller.ts ***!
  \**************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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
                exports.UploaderController = void 0;
                const auth_1 = __webpack_require__(/*! @app/common/auth */ "./libs/common/src/auth/index.ts");
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
                const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
                const cloud_providers_1 = __webpack_require__(/*! ./cloud-providers */ "./apps/uploader/src/cloud-providers/index.ts");
                const file_uploader_dto_1 = __webpack_require__(/*! ./dtos/file.uploader.dto */ "./apps/uploader/src/dtos/file.uploader.dto.ts");
                const uploader_service_1 = __webpack_require__(/*! ./uploader.service */ "./apps/uploader/src/uploader.service.ts");
                let UploaderController = class UploaderController {
                    constructor(uploaderService, mediaUploadFactory) {
                        this.uploaderService = uploaderService;
                        this.mediaUploadFactory = mediaUploadFactory;
                    }
                    async uploadUserFile(file, res, req) {
                        const mediaType = 'image';
                        const entity = 'images';
                        this.mediaUploadFactory.generalUpload(file, mediaType, entity, res);
                    }
                };
                __decorate([
                    (0, swagger_1.ApiConsumes)('multipart/form-data'),
                    (0, swagger_1.ApiBody)({ type: file_uploader_dto_1.FileUploadDto }),
                    (0, common_1.Post)('/'),
                    (0, common_1.UseGuards)(auth_1.JwtAuthGuard),
                    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
                    __param(0, (0, common_1.UploadedFile)()),
                    __param(1, (0, common_1.Res)()),
                    __param(2, (0, common_1.Req)()),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object, Object, Object]),
                    __metadata("design:returntype", Promise)
                ], UploaderController.prototype, "uploadUserFile", null);
                UploaderController = __decorate([
                    (0, swagger_1.ApiTags)('uploader'),
                    (0, common_1.Controller)('uploader'),
                    __metadata("design:paramtypes", [typeof (_a = typeof uploader_service_1.UploaderService !== "undefined" && uploader_service_1.UploaderService) === "function" ? _a : Object, typeof (_b = typeof cloud_providers_1.MediaUploadFactory !== "undefined" && cloud_providers_1.MediaUploadFactory) === "function" ? _b : Object])
                ], UploaderController);
                exports.UploaderController = UploaderController;


                /***/
}),

/***/ "./apps/uploader/src/uploader.module.ts":
/*!**********************************************!*\
  !*** ./apps/uploader/src/uploader.module.ts ***!
  \**********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.UploaderModule = void 0;
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
                const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
                const uploader_controller_1 = __webpack_require__(/*! ./uploader.controller */ "./apps/uploader/src/uploader.controller.ts");
                const uploader_service_1 = __webpack_require__(/*! ./uploader.service */ "./apps/uploader/src/uploader.service.ts");
                const Joi = __webpack_require__(/*! joi */ "joi");
                const common_3 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
                const cloud_providers_1 = __webpack_require__(/*! ./cloud-providers */ "./apps/uploader/src/cloud-providers/index.ts");
                const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
                const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
                let UploaderModule = class UploaderModule {
                };
                UploaderModule = __decorate([
                    (0, common_1.Module)({
                        imports: [
                            config_1.ConfigModule.forRoot({
                                isGlobal: true,
                                envFilePath: './apps/uploader/.env',
                                validationSchema: Joi.object({
                                    MONGODB_URI: Joi.string().required(),
                                    HTTP_PORT: Joi.number().required(),
                                    PRIVATE_KEY: Joi.string().required(),
                                    PROJECT_ID: Joi.string().required(),
                                    CLIENT_EMAIL: Joi.string().required(),
                                    BUCKET: Joi.string().required(),
                                }),
                            }),
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
                            common_2.LoggerModule,
                            common_3.HealthModule,
                            cloud_providers_1.MediaUploadModule.register(),
                            platform_express_1.MulterModule.register({
                                fileFilter: (req, file, callback) => {
                                    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
                                    callback(null, true);
                                },
                            }),
                        ],
                        controllers: [uploader_controller_1.UploaderController],
                        providers: [uploader_service_1.UploaderService],
                    })
                ], UploaderModule);
                exports.UploaderModule = UploaderModule;


                /***/
}),

/***/ "./apps/uploader/src/uploader.service.ts":
/*!***********************************************!*\
  !*** ./apps/uploader/src/uploader.service.ts ***!
  \***********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.UploaderService = void 0;
                const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
                let UploaderService = class UploaderService {
                    getHello() {
                        return 'Hello World!';
                    }
                };
                UploaderService = __decorate([
                    (0, common_1.Injectable)()
                ], UploaderService);
                exports.UploaderService = UploaderService;


                /***/
}),

/***/ "./libs/common/src/auth/index.ts":
/*!***************************************!*\
  !*** ./libs/common/src/auth/index.ts ***!
  \***************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./jwt-auth.guard */ "./libs/common/src/auth/jwt-auth.guard.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/auth/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./libs/common/src/auth/jwt-auth.guard.ts ***!
  \************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/base/Errors.factory.ts":
/*!************************************************!*\
  !*** ./libs/common/src/base/Errors.factory.ts ***!
  \************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/constants/index.ts":
/*!********************************************!*\
  !*** ./libs/common/src/constants/index.ts ***!
  \********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./services */ "./libs/common/src/constants/services.ts"), exports);
                __exportStar(__webpack_require__(/*! ./query */ "./libs/common/src/constants/query.ts"), exports);


                /***/
}),

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


                /***/
}),

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


                /***/
}),

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


                /***/
}),

/***/ "./libs/common/src/database/abstract.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/abstract.schema.ts ***!
  \*****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/database/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/database/index.ts ***!
  \*******************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./database.module */ "./libs/common/src/database/database.module.ts"), exports);
                __exportStar(__webpack_require__(/*! ./abstract.repository */ "./libs/common/src/database/abstract.repository.ts"), exports);
                __exportStar(__webpack_require__(/*! ./abstract.schema */ "./libs/common/src/database/abstract.schema.ts"), exports);


                /***/
}),

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


                /***/
}),

/***/ "./libs/common/src/decorators/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/decorators/index.ts ***!
  \*********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./current-user.decorator */ "./libs/common/src/decorators/current-user.decorator.ts"), exports);
                __exportStar(__webpack_require__(/*! ./roles.decorator */ "./libs/common/src/decorators/roles.decorator.ts"), exports);


                /***/
}),

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


                /***/
}),

/***/ "./libs/common/src/dto/api/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/dto/api/index.ts ***!
  \******************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/category-dtos/create-category.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/create-category.dto.ts ***!
  \******************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/category-dtos/index.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/index.ts ***!
  \****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-category.dto */ "./libs/common/src/dto/category-dtos/create-category.dto.ts"), exports);
                __exportStar(__webpack_require__(/*! ./update-category.dto */ "./libs/common/src/dto/category-dtos/update-category.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/category-dtos/update-category.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/common/src/dto/category-dtos/update-category.dto.ts ***!
  \******************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/ids.dto/id.dto.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/dto/ids.dto/id.dto.ts ***!
  \***********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/ids.dto/index.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/dto/ids.dto/index.ts ***!
  \**********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./id.dto */ "./libs/common/src/dto/ids.dto/id.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/index.ts":
/*!**************************************!*\
  !*** ./libs/common/src/dto/index.ts ***!
  \**************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
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


                /***/
}),

/***/ "./libs/common/src/dto/none-release/create-none-release.ts":
/*!*****************************************************************!*\
  !*** ./libs/common/src/dto/none-release/create-none-release.ts ***!
  \*****************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/none-release/index.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/dto/none-release/index.ts ***!
  \***************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-none-release */ "./libs/common/src/dto/none-release/create-none-release.ts"), exports);
                __exportStar(__webpack_require__(/*! ./update-none-release */ "./libs/common/src/dto/none-release/update-none-release.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/none-release/update-none-release.ts":
/*!*****************************************************************!*\
  !*** ./libs/common/src/dto/none-release/update-none-release.ts ***!
  \*****************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/product-dtos/create-product.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/create-product.dto.ts ***!
  \****************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/product-dtos/index.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/index.ts ***!
  \***************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-product.dto */ "./libs/common/src/dto/product-dtos/create-product.dto.ts"), exports);
                __exportStar(__webpack_require__(/*! ./update-product.dto */ "./libs/common/src/dto/product-dtos/update-product.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/product-dtos/update-product.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/dto/product-dtos/update-product.dto.ts ***!
  \****************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/release/create-release.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/release/create-release.ts ***!
  \*******************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/release/index.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/dto/release/index.ts ***!
  \**********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-release */ "./libs/common/src/dto/release/create-release.ts"), exports);
                __exportStar(__webpack_require__(/*! ./update-release */ "./libs/common/src/dto/release/update-release.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/release/update-release.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/release/update-release.ts ***!
  \*******************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts":
/*!************************************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts ***!
  \************************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/sub-category-dtos/index.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/index.ts ***!
  \********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./updateSubCategory.dto */ "./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts"), exports);
                __exportStar(__webpack_require__(/*! ./createSubCategory.dto */ "./libs/common/src/dto/sub-category-dtos/createSubCategory.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts":
/*!************************************************************************!*\
  !*** ./libs/common/src/dto/sub-category-dtos/updateSubCategory.dto.ts ***!
  \************************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/user-dtos/create-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/create-user.dto.ts ***!
  \**********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/user-dtos/get-user.dto.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/get-user.dto.ts ***!
  \*******************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/user-dtos/index.ts":
/*!************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/index.ts ***!
  \************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-user.dto */ "./libs/common/src/dto/user-dtos/create-user.dto.ts"), exports);
                __exportStar(__webpack_require__(/*! ./update-user.dto */ "./libs/common/src/dto/user-dtos/update-user.dto.ts"), exports);
                __exportStar(__webpack_require__(/*! ./get-user.dto */ "./libs/common/src/dto/user-dtos/get-user.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/dto/user-dtos/update-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/dto/user-dtos/update-user.dto.ts ***!
  \**********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/workspace-dto/create-workspace.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/common/src/dto/workspace-dto/create-workspace.dto.ts ***!
  \*******************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/dto/workspace-dto/index.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/dto/workspace-dto/index.ts ***!
  \****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./create-workspace.dto */ "./libs/common/src/dto/workspace-dto/create-workspace.dto.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/enums/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/enums/index.ts ***!
  \****************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./org.enum */ "./libs/common/src/enums/org.enum.ts"), exports);
                __exportStar(__webpack_require__(/*! ./user.enum */ "./libs/common/src/enums/user.enum.ts"), exports);
                __exportStar(__webpack_require__(/*! ./workspace.enum */ "./libs/common/src/enums/workspace.enum.ts"), exports);
                __exportStar(__webpack_require__(/*! ./shared.enum */ "./libs/common/src/enums/shared.enum.ts"), exports);
                __exportStar(__webpack_require__(/*! ./roles.enum */ "./libs/common/src/enums/roles.enum.ts"), exports);


                /***/
}),

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


                /***/
}),

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


                /***/
}),

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


                /***/
}),

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


                /***/
}),

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


                /***/
}),

/***/ "./libs/common/src/health/health.controller.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/health/health.controller.ts ***!
  \*****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/health/health.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/health/health.module.ts ***!
  \*************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/health/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/health/index.ts ***!
  \*****************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./health.module */ "./libs/common/src/health/health.module.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
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


                /***/
}),

/***/ "./libs/common/src/interfaces/action.interface.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/interfaces/action.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/api.interface.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/interfaces/api.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/base.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/base.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/category.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/category.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/iam.policy.interface.ts":
/*!************************************************************!*\
  !*** ./libs/common/src/interfaces/iam.policy.interface.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/interfaces/index.ts ***!
  \*********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
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


                /***/
}),

/***/ "./libs/common/src/interfaces/nonerelease.interface.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/interfaces/nonerelease.interface.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/org.interface.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/interfaces/org.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/product.interface.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/interfaces/product.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/release.interface.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/interfaces/release.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/role.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/role.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/settings.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/settings.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/shared.interface.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/interfaces/shared.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/subcategroy.interface.ts":
/*!*************************************************************!*\
  !*** ./libs/common/src/interfaces/subcategroy.interface.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/user.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/user.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/workflow.interface.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/interfaces/workflow.interface.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/interfaces/workspace.interface.ts":
/*!***********************************************************!*\
  !*** ./libs/common/src/interfaces/workspace.interface.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));


                /***/
}),

/***/ "./libs/common/src/logger/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/logger/index.ts ***!
  \*****************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./logger.module */ "./libs/common/src/logger/logger.module.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/logger/logger.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/logger/logger.module.ts ***!
  \*************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/action.schema.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/modles/action.schema.ts ***!
  \*************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/category.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/category.schema.ts ***!
  \***************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/iam.policy.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/modles/iam.policy.schema.ts ***!
  \*****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/modles/index.ts ***!
  \*****************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
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


                /***/
}),

/***/ "./libs/common/src/modles/none-release.document.schema.ts":
/*!****************************************************************!*\
  !*** ./libs/common/src/modles/none-release.document.schema.ts ***!
  \****************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/order.schema.ts":
/*!************************************************!*\
  !*** ./libs/common/src/modles/order.schema.ts ***!
  \************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/org.schema.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/modles/org.schema.ts ***!
  \**********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/product.schema.ts":
/*!**************************************************!*\
  !*** ./libs/common/src/modles/product.schema.ts ***!
  \**************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/release.document.schema.ts":
/*!***********************************************************!*\
  !*** ./libs/common/src/modles/release.document.schema.ts ***!
  \***********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/role.schema.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/modles/role.schema.ts ***!
  \***********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/settings.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/settings.schema.ts ***!
  \***************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/shared.schema.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/modles/shared.schema.ts ***!
  \*************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/subCategory.schema.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/modles/subCategory.schema.ts ***!
  \******************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/user.schema.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/modles/user.schema.ts ***!
  \***********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/workflow.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/modles/workflow.schema.ts ***!
  \***************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/modles/workspace.schema.ts":
/*!****************************************************!*\
  !*** ./libs/common/src/modles/workspace.schema.ts ***!
  \****************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/prjections/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/prjections/index.ts ***!
  \*********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./workspace.project */ "./libs/common/src/prjections/workspace.project.ts"), exports);
                __exportStar(__webpack_require__(/*! ./roles.project */ "./libs/common/src/prjections/roles.project.ts"), exports);
                __exportStar(__webpack_require__(/*! ./user.project */ "./libs/common/src/prjections/user.project.ts"), exports);


                /***/
}),

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


                /***/
}),

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


                /***/
}),

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


                /***/
}),

/***/ "./libs/common/src/rmq/index.ts":
/*!**************************************!*\
  !*** ./libs/common/src/rmq/index.ts ***!
  \**************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./rmq.module */ "./libs/common/src/rmq/rmq.module.ts"), exports);
                __exportStar(__webpack_require__(/*! ./rmq.service */ "./libs/common/src/rmq/rmq.service.ts"), exports);


                /***/
}),

/***/ "./libs/common/src/rmq/rmq.module.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/rmq/rmq.module.ts ***!
  \*******************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/rmq/rmq.service.ts":
/*!********************************************!*\
  !*** ./libs/common/src/rmq/rmq.service.ts ***!
  \********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


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


                /***/
}),

/***/ "./libs/common/src/swagger/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/swagger/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.createDocument = void 0;
                const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
                const SWAGGER_CONFIG = {
                    title: 'api management system',
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


                /***/
}),

/***/ "./libs/common/src/utils/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/utils/index.ts ***!
  \****************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                __exportStar(__webpack_require__(/*! ./user.utils */ "./libs/common/src/utils/user.utils.ts"), exports);


                /***/
}),

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


                /***/
}),

/***/ "@google-cloud/storage":
/*!****************************************!*\
  !*** external "@google-cloud/storage" ***!
  \****************************************/
/***/ ((module) => {

                module.exports = require("@google-cloud/storage");

                /***/
}),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

                module.exports = require("@nestjs/common");

                /***/
}),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

                module.exports = require("@nestjs/config");

                /***/
}),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

                module.exports = require("@nestjs/core");

                /***/
}),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

                module.exports = require("@nestjs/microservices");

                /***/
}),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

                module.exports = require("@nestjs/mongoose");

                /***/
}),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

                module.exports = require("@nestjs/platform-express");

                /***/
}),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

                module.exports = require("@nestjs/swagger");

                /***/
}),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

                module.exports = require("class-transformer");

                /***/
}),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

                module.exports = require("class-validator");

                /***/
}),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

                module.exports = require("cookie-parser");

                /***/
}),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

                module.exports = require("joi");

                /***/
}),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

                module.exports = require("lodash");

                /***/
}),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

                module.exports = require("mongoose");

                /***/
}),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

                module.exports = require("nestjs-pino");

                /***/
}),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

                module.exports = require("rxjs");

                /***/
}),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

                module.exports = require("stream");

                /***/
})

        /******/
});
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
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        var exports = __webpack_exports__;
        /*!***********************************!*\
          !*** ./apps/uploader/src/main.ts ***!
          \***********************************/

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
        const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
        const uploader_module_1 = __webpack_require__(/*! ./uploader.module */ "./apps/uploader/src/uploader.module.ts");
        const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
        const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
        const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
        const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
        const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
        const swagger_2 = __webpack_require__(/*! @app/common/swagger */ "./libs/common/src/swagger/index.ts");
        async function bootstrap() {
            const app = await core_1.NestFactory.create(uploader_module_1.UploaderModule);
            const configService = app.get(config_1.ConfigService);
            app.use(cookieParser());
            app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
            app.useLogger(app.get(nestjs_pino_1.Logger));
            swagger_1.SwaggerModule.setup('docs', app, (0, swagger_2.createDocument)(app));
            common_2.Logger.log(`Uploader APP IS Listening on port ${configService.get('HTTP_PORT')}`);
            await app.listen(configService.get('HTTP_PORT'));
        }
        bootstrap();

    })();

    /******/
})()
    ;