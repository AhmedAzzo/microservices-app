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
exports.CreateWorkspaceDto = exports.LocationDto = exports.AddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
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
//# sourceMappingURL=create-workspace.dto.js.map