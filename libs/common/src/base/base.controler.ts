import { HttpException, HttpStatus } from '@nestjs/common';

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
export class BaseController {
  formatResponse<T>({
    message = '',
    data,
    paginationList,
  }: BaseControllerProps<T>) {
    return {
      data,
      message,
      paginationList,
    };
  }

  /**
   * @remarks
   * utility method to throw UNAUTHORIZED error.
   *
   * @internal
   */
  throwUnauthorisedError(errorMessage: string) {
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: errorMessage,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }

  /**
   * @remarks
   * utility method to throw Bad Request error.
   *
   * @internal
   */
  throwBadRequestError(errorMessage: string) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: errorMessage,
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  /**
   * @remarks
   * utility method to throw Bad Request error for e-invoice validation.
   *
   * @internal
   */
  throwBadRequestErrorForEInvoiceValidation(errorMessage: any) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: errorMessage,
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  /**
   * @remarks
   * utility method to throw UNAUTHORIZED error.
   *
   * @internal
   */
  throwInternalServerError(errorMessage: string) {
    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: errorMessage,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  /**
   * @remarks
   * utility method to throw UNAUTHORIZED error.
   *
   * @internal
   */
  throwNotFoundError(errorMessage: string) {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: errorMessage,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
