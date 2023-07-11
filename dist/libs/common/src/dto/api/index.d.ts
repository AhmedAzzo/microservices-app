import { IFilterQueryType } from '@app/common/interfaces';
import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { PopulateOptions } from 'mongoose';
export declare class FilterQueryDto {
    values?: string[];
    filterType: 'text' | 'date' | 'set';
    type: IFilterQueryType;
    filter: string;
    dateFrom?: string;
    dateTo?: string;
}
export declare class FilterValidator implements ValidatorConstraintInterface {
    validate(columnValue: FilterQueryDto, args: ValidationArguments): Promise<boolean>;
    isObject(objValue: any): boolean;
    defaultMessage(args: ValidationArguments): any;
}
export declare class SortValidator implements ValidatorConstraintInterface {
    validate(item: SortDto, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): any;
}
declare class SortDto {
    [key: string]: -1 | 1;
}
declare class FilterDto {
    [key: string]: FilterQueryDto;
}
export declare class IBaseQueryParamsDto {
    sort: SortDto;
    filter?: FilterDto;
    limit?: number;
    skip?: number;
}
export declare class IFindOptionsDto {
    select?: any;
    sort?: any;
    populateProjectionKeys?: string;
    limit?: number;
    page?: number;
    skip?: number;
    populate?: PopulateOptions;
}
export {};
