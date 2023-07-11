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
exports.IFindOptionsDto = exports.IBaseQueryParamsDto = exports.SortValidator = exports.FilterValidator = exports.FilterQueryDto = void 0;
const constants_1 = require("@app/common/constants");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class FilterQueryDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        type: [String],
        default: [],
        required: false,
    }),
    __metadata("design:type", Array)
], FilterQueryDto.prototype, "values", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['text', 'date', 'set']),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'text',
        required: true,
        enum: ['text', 'date', 'set'],
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "filterType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)([
        'equals',
        'or',
        'contains',
        'lessThanOrEqual',
        'greaterThanOrEqual',
        'inRange',
    ]),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: 'equals',
        required: true,
        enum: [
            'equals',
            'or',
            'contains',
            'lessThanOrEqual',
            'greaterThanOrEqual',
            'inRange',
        ],
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: '',
        required: true,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: new Date().toString(),
        required: false,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: new Date().toString(),
        required: false,
    }),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "dateTo", void 0);
exports.FilterQueryDto = FilterQueryDto;
let FilterValidator = class FilterValidator {
    async validate(columnValue, args) {
        try {
            let isValidate = true;
            Object.keys(columnValue).forEach(async function eachKey(key) {
                if (key.length > 20 ||
                    typeof key !== 'string' ||
                    !(0, class_validator_1.isObject)(columnValue[key])) {
                    isValidate = false;
                }
                if ((0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(FilterQueryDto, columnValue[key])).length) {
                    isValidate = false;
                }
            });
            return isValidate;
        }
        catch (error) { }
    }
    isObject(objValue) {
        return (objValue &&
            typeof objValue === 'object' &&
            objValue.constructor === Object);
    }
    defaultMessage(args) {
        const params = args.constraints[0];
        if (!params.message)
            return `the ${args.property} is not validate`;
        else
            return params.message;
    }
};
FilterValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], FilterValidator);
exports.FilterValidator = FilterValidator;
let SortValidator = class SortValidator {
    async validate(item, args) {
        try {
            let isValidate = true;
            Object.keys(item).forEach(function eachKey(key) {
                if (item[key] !== 1 && item[key] !== -1) {
                    isValidate = false;
                }
            });
            return isValidate;
        }
        catch (error) { }
    }
    defaultMessage(args) {
        var _a;
        const params = (_a = args.constraints) === null || _a === void 0 ? void 0 : _a[0];
        if (!(params === null || params === void 0 ? void 0 : params.message))
            return `the ${args === null || args === void 0 ? void 0 : args.property} is not validate`;
        else
            return params === null || params === void 0 ? void 0 : params.message;
    }
};
SortValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], SortValidator);
exports.SortValidator = SortValidator;
class SortDto {
}
class FilterDto {
}
class IBaseQueryParamsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.Validate)(SortValidator),
    (0, swagger_1.ApiProperty)({
        type: SortDto,
        required: false,
        description: 'Sort',
        example: { name: 1 },
    }),
    __metadata("design:type", SortDto)
], IBaseQueryParamsDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.Validate)(FilterValidator),
    (0, swagger_1.ApiProperty)({
        type: FilterDto,
        required: false,
        description: 'Filters',
        example: {
            name: {
                type: 'contains',
                filterType: 'text',
                filter: 'name',
                values: ['name'],
            },
        },
    }),
    __metadata("design:type", FilterDto)
], IBaseQueryParamsDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || constants_1.DEFAULT_LIMIT),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Limit',
        example: constants_1.DEFAULT_LIMIT,
    }),
    __metadata("design:type", Number)
], IBaseQueryParamsDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value) : constants_1.DEFAULT_SKIP)),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'skip',
        example: constants_1.DEFAULT_SKIP,
    }),
    __metadata("design:type", Number)
], IBaseQueryParamsDto.prototype, "skip", void 0);
exports.IBaseQueryParamsDto = IBaseQueryParamsDto;
class IFindOptionsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 10),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Limit',
        example: 10,
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value) || 1),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Page',
        example: 0,
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'skip',
    }),
    __metadata("design:type", Number)
], IFindOptionsDto.prototype, "skip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: typeof swagger_1.ApiProperty,
        description: 'populate',
        example: {},
    }),
    __metadata("design:type", Object)
], IFindOptionsDto.prototype, "populate", void 0);
exports.IFindOptionsDto = IFindOptionsDto;
//# sourceMappingURL=index.js.map