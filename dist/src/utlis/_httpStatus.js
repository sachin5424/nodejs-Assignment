'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports._httpStatusService = void 0;
class httpStatus {
    constructor() {
        this.successResError = {};
        this.status = {
            success: 200,
            serverError: 500,
            created: 201,
            updated: 201,
            Unauthorized: 401,
            Forbidden: 403,
            NotFound: 404,
            NotFoundError: undefined,
            ProxyError: undefined,
            Proxy: undefined,
            UnprocessableEntity: 422,
            badRequest: 400,
            OK: 200
        };
    }
}
;
exports._httpStatusService = new httpStatus();
//# sourceMappingURL=_httpStatus.js.map