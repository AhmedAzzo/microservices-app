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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
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
//# sourceMappingURL=create-user.dto.js.map