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
exports.OrgSchema = exports.Org = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
const shared_schema_1 = require("./shared.schema");
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
    __metadata("design:type", String)
], Org.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.Location
    }),
    __metadata("design:type", shared_schema_1.Location)
], Org.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.Contact
    }),
    __metadata("design:type", shared_schema_1.Contact)
], Org.prototype, "contact", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Org.prototype, "orgType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: shared_schema_1.ModuleSettings,
    }),
    __metadata("design:type", shared_schema_1.ModuleSettings)
], Org.prototype, "moduleSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", shared_schema_1.Meta)
], Org.prototype, "meta", void 0);
Org = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Org);
exports.Org = Org;
exports.OrgSchema = mongoose_1.SchemaFactory.createForClass(Org);
//# sourceMappingURL=org.schema.js.map