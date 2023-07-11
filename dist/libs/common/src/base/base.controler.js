"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
class BaseController {
    formatResponse({ message = '', data, paginationList, }) {
        return {
            data,
            message,
            paginationList,
        };
    }
    throwUnauthorisedError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNAUTHORIZED,
            error: errorMessage,
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
    throwBadRequestError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwBadRequestErrorForEInvoiceValidation(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: errorMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    throwInternalServerError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            error: errorMessage,
        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    throwNotFoundError(errorMessage) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: errorMessage,
        }, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controler.js.map