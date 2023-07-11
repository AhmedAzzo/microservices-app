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
exports.NoneReleaseSchema = exports.NoneRelease = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
const shared_schema_1 = require("./shared.schema");
const mongoose_2 = require("mongoose");
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
    __metadata("design:type", mongoose_2.Types.ObjectId)
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
    __metadata("design:type", shared_schema_1.Meta)
], NoneRelease.prototype, "meta", void 0);
NoneRelease = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], NoneRelease);
exports.NoneRelease = NoneRelease;
exports.NoneReleaseSchema = mongoose_1.SchemaFactory.createForClass(NoneRelease);
//# sourceMappingURL=none-release.document.schema.js.map