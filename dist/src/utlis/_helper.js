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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregate = exports.passwordDecode = exports._tokenDecode = void 0;
const _index_1 = require("../model/_index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT_SECREATE_kEY = 'test';
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const _tokenDecode = (req) => {
    var token = req.headers.authorization.split(' ')[1];
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            var decode = jsonwebtoken_1.default.verify(token, JWT_SECREATE_kEY);
            if (!decode)
                reject("Invalid token");
            let userId = decode.userId;
            const user = yield _index_1.userModel.findOne({ _id: userId });
            if (!user)
                reject("Invalid token");
            resolve(user);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports._tokenDecode = _tokenDecode;
const passwordDecode = (payload) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(payload);
            const data = yield _index_1.userModel.findOne({ email: payload.email });
            const password = yield bcryptjs_1.default.compare(payload.password, data.password);
            if (password === true) {
                resolve(true);
            }
            reject(false);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.passwordDecode = passwordDecode;
const aggregate = (model, filter) => {
    return new Promise((resolve, reject) => {
        model.aggregate(filter).exec(function (err, invites) {
            if (err) {
                reject(err);
            }
            resolve(invites);
        });
    });
};
exports.aggregate = aggregate;
//# sourceMappingURL=_helper.js.map