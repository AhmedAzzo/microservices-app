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
exports.UpdateOrderDto = void 0;
const modles_1 = require("@app/common/modles");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'cocNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "cocNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'registrationNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "registrationNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'referenceNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", Date)
], UpdateOrderDto.prototype, "issuanceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", Date)
], UpdateOrderDto.prototype, "expDateOfCoc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importer',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerAddress',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCountry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'importerCity',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "importerCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporter',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterAddress',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCountry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterCountry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'exporterCity',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "exporterCity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "invoiceAmount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceCurrency',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "invoiceCurrency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'invoiceNo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "invoiceNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", Date)
], UpdateOrderDto.prototype, "invoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'methodOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "methodOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'countryOfShipment',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "countryOfShipment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "documentNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", Date)
], UpdateOrderDto.prototype, "documentDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'declaredPointOfEntry',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "declaredPointOfEntry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'packingDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "packingDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "numberAndTypeOfPackages", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'containersOrTruckDetails',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "containersOrTruckDetails", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "containersOrTruckAndSealNumbers", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: modles_1.Products,
        default: [
            {
                qty: 1,
                goodsValue: '1',
                originAsMarkedOnGoods: '123',
                description: 'string',
                iQStandardNo: '1',
                product: '648b1a483bef2213783d613b',
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], UpdateOrderDto.prototype, "products", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'remarks',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "remarks", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        default: new Date(),
        required: true,
    }),
    __metadata("design:type", Date)
], UpdateOrderDto.prototype, "dateOfAssessment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 22,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "invoiceValueInUsd", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 33,
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "declaredValuePerContainer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'nameAndSignature',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "nameAndSignature", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'officeIssuing',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "officeIssuing", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'logo',
        required: true,
    }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "logo", void 0);
exports.UpdateOrderDto = UpdateOrderDto;
//# sourceMappingURL=update-order.dto.js.map