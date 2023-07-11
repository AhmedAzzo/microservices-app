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
exports.UpdateSubCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
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
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateSubCategoryDto.prototype, "category", void 0);
exports.UpdateSubCategoryDto = UpdateSubCategoryDto;
//# sourceMappingURL=updateSubCategory.dto.js.map