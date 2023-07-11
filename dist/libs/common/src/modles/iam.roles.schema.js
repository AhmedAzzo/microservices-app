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
exports.IamRoleSchema = exports.IamRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
const mongoose_2 = require("mongoose");
const shared_schema_1 = require("./shared.schema");
let IamRole = class IamRole extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], IamRole.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamRole.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamRole.prototype, "groupName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamRole.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamRole.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'iam_polices' }]),
    __metadata("design:type", Array)
], IamRole.prototype, "iamPolices", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", shared_schema_1.Meta)
], IamRole.prototype, "meta", void 0);
IamRole = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], IamRole);
exports.IamRole = IamRole;
exports.IamRoleSchema = mongoose_1.SchemaFactory.createForClass(IamRole);
//# sourceMappingURL=iam.roles.schema.js.map