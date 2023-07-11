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
exports.RoleSchema = exports.Role = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
const mongoose_2 = require("mongoose");
let Role = class Role extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Role.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'iampolicies' }]),
    __metadata("design:type", Array)
], Role.prototype, "iampolicies", void 0);
Role = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Role);
exports.Role = Role;
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(Role);
//# sourceMappingURL=role.schema.js.map