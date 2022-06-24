"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validRequest = void 0;
const express_validator_1 = require("express-validator");
const _httpStatus_1 = require("../utlis/_httpStatus");
const validRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            console.log({ errors });
            return res.status(_httpStatus_1._httpStatusService.status.UnprocessableEntity)
                .json({ status: _httpStatus_1._httpStatusService.status.UnprocessableEntity, message: "Invalid Fields", errors: errors.array({ onlyFirstError: true }) });
        }
        else {
            next();
        }
    }
    catch (error) {
        return res.status(_httpStatus_1._httpStatusService.status.serverError).json({ error: error.message });
    }
});
exports.validRequest = validRequest;
//# sourceMappingURL=request-validations.middleware.js.map