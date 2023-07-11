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
exports.OrderSchema = exports.Order = exports.Products = void 0;
const common_1 = require("@app/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shared_schema_1 = require("./shared.schema");
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
    __metadata("design:type", Date)
], Order.prototype, "issuanceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", Date)
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
    __metadata("design:type", Date)
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
    __metadata("design:type", Date)
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
    __metadata("design:type", Date)
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
    __metadata("design:type", shared_schema_1.Meta)
], Order.prototype, "meta", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map