import { IProperty } from '@app/common/interfaces';
export declare class QueryDto {
    sort?: any;
    filter?: any;
    onlyActive?: string;
    onlyInActive?: string;
    project?: IProperty;
    otherQueryOptions?: any[];
    limit: number;
    skip: number;
    page: number;
}
