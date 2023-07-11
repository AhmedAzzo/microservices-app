export declare class ErrorsFactory {
    constructor();
    throwUnauthorisedError(errorMessage: string): void;
    throwBadRequestError(errorMessage: string): void;
    throwBadRequestErrorForEInvoiceValidation(errorMessage: any): void;
    throwInternalServerError(errorMessage: string): void;
    throwNotFoundError(errorMessage: string): void;
}
