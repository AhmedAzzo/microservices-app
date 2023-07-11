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
exports.SubCategorySchema = exports.SubCategory = void 0;
const common_1 = require("@app/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shared_schema_1 = require("./shared.schema");
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
        ref: 'categories',
        required: true,
    }),
    __metadata("design:type", common_1.Category)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", shared_schema_1.Meta)
], SubCategory.prototype, "meta", void 0);
SubCategory = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], SubCategory);
exports.SubCategory = SubCategory;
exports.SubCategorySchema = mongoose_1.SchemaFactory.createForClass(SubCategory);
//# sourceMappingURL=subCategory.schema.js.map