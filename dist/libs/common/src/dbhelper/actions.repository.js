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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ActionsRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsRepository = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@app/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ActionsRepository = ActionsRepository_1 = class ActionsRepository extends common_2.AbstractRepository {
    constructor(actionModel, connection) {
        super(actionModel, connection);
        this.logger = new common_1.Logger(ActionsRepository_1.name);
    }
};
ActionsRepository = ActionsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Action.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Connection])
], ActionsRepository);
exports.ActionsRepository = ActionsRepository;
//# sourceMappingURL=actions.repository.js.map