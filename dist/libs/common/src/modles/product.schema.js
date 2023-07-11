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
exports.ProductSchema = exports.Product = void 0;
const common_1 = require("@app/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shared_schema_1 = require("./shared.schema");
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
    __metadata("design:type", mongoose_2.Types.ObjectId)
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
    __metadata("design:type", shared_schema_1.Meta)
], Product.prototype, "meta", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map