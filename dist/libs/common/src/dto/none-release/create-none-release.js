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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoneReleaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
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
    __metadata("design:type", mongoose_1.Types.ObjectId)
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
//# sourceMappingURL=create-none-release.js.map