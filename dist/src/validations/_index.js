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
exports.validations = void 0;
const express_validator_1 = require("express-validator");
const responseMessage_1 = require("../utlis/responseMessage");
const book_service_1 = __importDefault(require("../services/book.service"));
const author_service_1 = __importDefault(require("../services/author.service"));
const user_service_1 = __importDefault(require("../services/user.service"));
const _helper_1 = require("../utlis/_helper");
const bookService = new book_service_1.default();
const authorService = new author_service_1.default();
const userService = new user_service_1.default();
const createBook = [
    (0, express_validator_1.check)('name').notEmpty().withMessage(responseMessage_1._infoMessaage.required).isLength({ min: 3 })
        .isString(),
    (0, express_validator_1.check)('published').notEmpty().withMessage(responseMessage_1._infoMessaage.required).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return authorService.findOne({ _id: value }).then((author) => {
            if (!author)
                throw new Error(responseMessage_1._infoMessaage.invalidId('published'));
        }).catch((error) => {
            throw new Error(responseMessage_1._infoMessaage.invalidId('published'));
        });
    }))
        .isString(),
    (0, express_validator_1.check)('price').notEmpty().withMessage(responseMessage_1._infoMessaage.required).isNumeric(),
];
const createAuthor = [
    (0, express_validator_1.check)('name').notEmpty().withMessage(responseMessage_1._infoMessaage.required).isLength({ min: 3 })
        .isString().custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return authorService.findOne({ name: value }).then((data) => {
            if (data)
                throw new Error(responseMessage_1._infoMessaage.unique(value));
        });
    })),
    (0, express_validator_1.check)('age').notEmpty().withMessage(responseMessage_1._infoMessaage.required).isNumeric(),
    (0, express_validator_1.check)('dateOfBirth').notEmpty().withMessage(responseMessage_1._infoMessaage.required)
        .isDate(),
];
const createUser = [
    (0, express_validator_1.check)('email').notEmpty().withMessage(responseMessage_1._infoMessaage.required)
        .isEmail().custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return userService.findOne({ email: value }).then((data) => {
            if (data)
                throw new Error(responseMessage_1._infoMessaage.unique(value));
        });
    })),
    (0, express_validator_1.check)('password').notEmpty().withMessage(responseMessage_1._infoMessaage.required).isString()
        // .isLength({ min: 6 }).isLowercase().withMessage('Password length must be 6 characters')
        .not()
        .isLowercase().withMessage(responseMessage_1._infoMessaage.uppercase)
        .not()
        .isUppercase().withMessage(responseMessage_1._infoMessaage.lowercase)
        .not()
        .isNumeric().withMessage(responseMessage_1._infoMessaage.number)
        .not()
        .isAlpha().withMessage(responseMessage_1._infoMessaage.alphanumeric),
    (0, express_validator_1.check)('confirmPassword').notEmpty().withMessage(responseMessage_1._infoMessaage.required).custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        if (value !== req.body.password) {
            throw new Error(responseMessage_1._infoMessaage.confirmPassword);
        }
    }))
];
const loginUser = [
    (0, express_validator_1.check)('email').notEmpty().withMessage(responseMessage_1._infoMessaage.required)
        .isEmail().custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        console.log({ value });
        return userService.findOne({ email: value }).then((data) => {
            if (!data)
                throw new Error(responseMessage_1._infoMessaage.emailNotRegex(value));
        });
    })),
    (0, express_validator_1.check)('password').notEmpty().withMessage(responseMessage_1._infoMessaage.required).custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, _helper_1.passwordDecode)({ email: req.body.email, password: value }).then((data) => {
            if (data === false) {
                throw Error(responseMessage_1._infoMessaage.passwordMatch);
            }
        });
    }))
];
exports.validations = {
    createBook, createAuthor, createUser, loginUser
};
//# sourceMappingURL=_index.js.map