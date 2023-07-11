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
exports.IamPolicySchema = exports.IamPolicy = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
let Policy = class Policy {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Policy.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String
    }),
    __metadata("design:type", String)
], Policy.prototype, "scope", void 0);
Policy = __decorate([
    (0, mongoose_1.Schema)()
], Policy);
let IamPolicy = class IamPolicy extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamPolicy.prototype, "policyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], IamPolicy.prototype, "controller", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Policy }),
    __metadata("design:type", Policy)
], IamPolicy.prototype, "policy", void 0);
IamPolicy = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], IamPolicy);
exports.IamPolicy = IamPolicy;
exports.IamPolicySchema = mongoose_1.SchemaFactory.createForClass(IamPolicy);
//# sourceMappingURL=iam.policy.schema.js.map