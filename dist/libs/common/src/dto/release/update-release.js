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
exports.UpdateReleaseDto = void 0;
const shared_schema_1 = require("@app/common/modles/shared.schema");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
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
    __metadata("design:type", shared_schema_1.Meta)
], UpdateReleaseDto.prototype, "meta", void 0);
exports.UpdateReleaseDto = UpdateReleaseDto;
//# sourceMappingURL=update-release.js.map