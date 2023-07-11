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
exports.BaseFactory = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../database");
const Errors_factory_1 = require("./Errors.factory");
let BaseFactory = class BaseFactory extends Errors_factory_1.ErrorsFactory {
    constructor(repository) {
        super();
        this.repository = repository;
    }
    async generateSequenceNumber(orgCode, moduleCode, target, options = {}) {
        const incQuery = {};
        incQuery[`moduleSettings.${target}.counter.value`] = 1;
        const orgSettings = await this.repository.findOneAndUpdate({ "meta.orgInfo.code": orgCode }, { $inc: incQuery });
        if (!orgSettings) {
            this.throwNotFoundError('org data is missing.');
        }
        const seqNumber = orgSettings.moduleSettings[target].counter.value;
        if (options.onlyNumber)
            return seqNumber.toString();
        if (!orgCode || !moduleCode || !seqNumber) {
            this.throwInternalServerError('org code, module code or seq number missing.');
        }
        return `${orgCode}-${moduleCode}-${seqNumber}`;
    }
};
BaseFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_1.AbstractRepository])
], BaseFactory);
exports.BaseFactory = BaseFactory;
//# sourceMappingURL=Base.factory.js.map