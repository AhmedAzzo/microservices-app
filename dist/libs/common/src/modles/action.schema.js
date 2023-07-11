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
exports.ActionSchema = exports.Action = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@app/common");
const shared_schema_1 = require("./shared.schema");
const mongoose_2 = require("mongoose");
let Action = class Action extends common_1.AbstractDocument {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'order',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Action.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Action.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: shared_schema_1.Meta }),
    __metadata("design:type", shared_schema_1.Meta)
], Action.prototype, "meta", void 0);
Action = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Action);
exports.Action = Action;
exports.ActionSchema = mongoose_1.SchemaFactory.createForClass(Action);
//# sourceMappingURL=action.schema.js.map