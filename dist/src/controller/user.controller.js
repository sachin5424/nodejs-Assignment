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
exports.UserController = void 0;
const responseMessage_1 = require("../utlis/responseMessage");
const _httpStatus_1 = require("../utlis/_httpStatus");
const user_service_1 = __importDefault(require("../services/user.service"));
class User extends user_service_1.default {
    constructor() {
        super();
    }
    ;
    createUser(req, res) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const result = yield _super.create.call(this, payload);
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.create('book', result));
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
    userlogin(req, res) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne },
            createJwtToken: { get: () => super.createJwtToken }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const user = yield _super.findOne.call(this, { email: payload.email });
                const userId = user._id;
                const token = yield _super.createJwtToken.call(this, { email: user.email, userId: user._id });
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.loginObj(token, userId));
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
    bookList(req, res) {
        const _super = Object.create(null, {
            findAllUser: { get: () => super.findAllUser }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield _super.findAllUser.call(this);
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.list('book', result));
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
}
exports.UserController = new User();
//# sourceMappingURL=user.controller.js.map