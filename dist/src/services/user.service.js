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
const _index_1 = require("../model/_index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class userService {
    constructor() { }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.userModel.create(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    genrateUserToken(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = userId;
                const user = yield _index_1.userModel.findOne({ _id });
                jsonwebtoken_1.default.sign();
            }
            catch (error) {
                throw error;
            }
        });
    }
    createJwtToken(payload) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield jsonwebtoken_1.default.sign(payload, 'test');
                if (token) {
                    resolve(token);
                }
                else {
                    reject('Invalid payload data');
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    findOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.userModel.findOne(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.userModel.find();
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.userModel.create(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = userService;
//# sourceMappingURL=user.service.js.map