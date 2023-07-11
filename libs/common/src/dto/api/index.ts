import { DEFAULT_LIMIT, DEFAULT_SKIP } from '@app/common/constants';
import { IFilterQueryType } from '@app/common/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type, plainToClass } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  ValidateNested,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isObject,
  validateSync,
} from 'class-validator';
import { PopulateOptions } from 'mongoose';

export class FilterQueryDto {
  @IsArray()
  @IsOptional()
  @IsNotEmpty()
  @Type(() => String)
  @ApiProperty({
    type: [String],
    default: [],
    required: false,
  })
  values?: string[];

  @IsNotEmpty()
  @IsEnum(['text', 'date', 'set'])
  @ApiProperty({
    type: String,
    default: 'text',
    required: true,
    enum: ['text', 'date', 'set'],
  })
  filterType: 'text' | 'date' | 'set';

  @IsNotEmpty()
  @IsEnum([
    'equals',
    'or',
    'contains',
    'lessThanOrEqual',
    'greaterThanOrEqual',
    'inRange',
  ])
  @ApiProperty({
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
  })
  type: IFilterQueryType;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  filter: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    default: new Date().toString(),
    required: false,
  })
  dateFrom?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    default: new Date().toString(),
    required: false,
  })
  dateTo?: string;
}

@ValidatorConstraint({ async: true })
export class FilterValidator implements ValidatorConstraintInterface {
  async validate(columnValue: FilterQueryDto, args: ValidationArguments) {
    try {
      let isValidate = true;
      Object.keys(columnValue).forEach(async function eachKey(key) {
        if (
          key.length > 20 ||
          typeof key !== 'string' ||
          !isObject(columnValue[key])
        ) {
          isValidate = false;
        }

        if (
          validateSync(plainToClass(FilterQueryDto, columnValue[key])).length
        ) {
          isValidate = false;
        }
      });

      return isValidate;
    } catch (error) {}
  }

  isObject(objValue) {
    return (
      objValue &&
      typeof objValue === 'object' &&
      objValue.constructor === Object
    );
  }

  defaultMessage(args: ValidationArguments) {
    const params = args.constraints[0];
    if (!params.message) return `the ${args.property} is not validate`;
    else return params.message;
  }
}
@ValidatorConstraint({ async: true })
export class SortValidator implements ValidatorConstraintInterface {
  async validate(item: SortDto, args: ValidationArguments) {
    try {
      let isValidate = true;
      Object.keys(item).forEach(function eachKey(key) {
        if (item[key] !== 1 && item[key] !== -1) {
          isValidate = false;
        }
      });

      return isValidate;
    } catch (error) {}
  }

  defaultMessage(args: ValidationArguments) {
    const params = args.constraints?.[0];
    if (!params?.message) return `the ${args?.property} is not validate`;
    else return params?.message;
  }
}

class SortDto {
  [key: string]: -1 | 1;
}
class FilterDto {
  [key: string]: FilterQueryDto;
}

export class IBaseQueryParamsDto {
  @IsOptional()
  @ValidateNested({ each: true })
  @Validate(SortValidator)
  @ApiProperty({
    type: SortDto,
    required: false,
    description: 'Sort',
    example: { name: 1 },
  })
  sort: SortDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Validate(FilterValidator)
  @ApiProperty({
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
  })
  filter?: FilterDto;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value) || DEFAULT_LIMIT)
  @ApiProperty({
    type: Number,
    required: false,
    description: 'Limit',
    example: DEFAULT_LIMIT,
  })
  limit?: number;

  // @IsOptional()
  // @IsNumber()
  // @Transform(({ value }) => parseInt(value) || DEFAULT_PAGE)
  // @ApiProperty({
  //   type: Number,
  //   required: false,
  //   description: 'Page',
  //   example: DEFAULT_PAGE,
  // })
  // page?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? parseInt(value) : DEFAULT_SKIP))
  @ApiProperty({
    type: Number,
    required: false,
    description: 'skip',
    example: DEFAULT_SKIP,
  })
  skip?: number;
}

export class IFindOptionsDto {
  // TODO: Add validation for those keys
  select?: any;
  sort?: any;
  populateProjectionKeys?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value) || 10)
  @ApiProperty({
    type: Number,
    description: 'Limit',
    example: 10,
  })
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value) || 1)
  @ApiProperty({
    type: Number,
    description: 'Page',
    example: 0,
  })
  page?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'skip',
  })
  skip?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    type: typeof ApiProperty,
    description: 'populate',
    example: {},
  })
  populate?: PopulateOptions;
}
