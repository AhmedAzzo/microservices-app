export interface BaseControllerProps<T> {
    data?: T;
    message?: string;
    paginationList?: {
        page: number;
        limit: number;
        skip: number;
        sort: {
            [key: string]: number;
        };
        list: T[];
    };
}
export declare class BaseController {
    formatResponse<T>({ message, data, paginationList, }: BaseControllerProps<T>): {
        data: T;
        message: string;
        paginationList: {
            page: number;
            limit: number;
            skip: number;
            sort: {
                [key: string]: number;
            };
            list: T[];
        };
    };
    throwUnauthorisedError(errorMessage: string): void;
    throwBadRequestError(errorMessage: string): void;
    throwBadRequestErrorForEInvoiceValidation(errorMessage: any): void;
    throwInternalServerError(errorMessage: string): void;
    throwNotFoundError(errorMessage: string): void;
}
