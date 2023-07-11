import { IBaseQueryParams, IMeta } from '../interfaces';
export declare const getPaginationQuery: (queryParams: IBaseQueryParams, keyMapper?: {}) => {
    sort: any;
    limit: number;
    page: number;
    skip: number;
};
export declare const getPaginationForAggregaateQueryHelper: (queryParams: IBaseQueryParams, keyMapper?: {}) => {
    sort: any;
    limit: number;
    page: number;
    skip: number;
};
export declare const getFilterQuery: (filter: any, keyMapper?: {}, valueParser?: {}) => any;
export declare const getMeta: (meta: IMeta, userId: string) => IMeta;
