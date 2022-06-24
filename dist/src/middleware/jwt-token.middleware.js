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
exports.JWT_TOKEN = void 0;
const _helper_1 = require("../utlis/_helper");
const JWT_TOKEN = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var header = req.headers;
        if (!header.authorization) {
            return res.status(500).json({
                status: 400,
                message: "authorization is required"
            });
        }
        else {
            yield (0, _helper_1._tokenDecode)(req);
            next();
        }
    }
    catch (error) {
        res.status(401).json({
            status: 401,
            message: error.message
        });
    }
});
exports.JWT_TOKEN = JWT_TOKEN;
//# sourceMappingURL=jwt-token.middleware.js.map