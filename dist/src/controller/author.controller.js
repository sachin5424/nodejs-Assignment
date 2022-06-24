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
exports.AuthorController = void 0;
const responseMessage_1 = require("../utlis/responseMessage");
const _httpStatus_1 = require("../utlis/_httpStatus");
const author_service_1 = __importDefault(require("../services/author.service"));
const _helper_1 = require("../utlis/_helper");
const book_service_1 = __importDefault(require("../services/book.service"));
class Author extends author_service_1.default {
    constructor() {
        super();
    }
    ;
    createAuthor(req, res) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const userId = yield (0, _helper_1._tokenDecode)(req);
                payload['userId'] = userId._id;
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
    authorList(req, res) {
        const _super = Object.create(null, {
            findAllAuthor: { get: () => super.findAllAuthor }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield _super.findAllAuthor.call(this);
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.list('author', result));
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
    authorRelated(req, res) {
        const _super = Object.create(null, {
            relatedBook: { get: () => super.relatedBook }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const result = yield _super.relatedBook.call(this, _id);
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.list('author', result));
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
    delete(req, res) {
        const _super = Object.create(null, {
            deleteAuthor: { get: () => super.deleteAuthor }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield _super.deleteAuthor.call(this, _id);
                const bookService = new book_service_1.default();
                yield bookService.relateddeleteBook({ published: _id });
                return res.status(_httpStatus_1._httpStatusService.status.OK)
                    .json(responseMessage_1.resObj.deleteObj());
            }
            catch (error) {
                return res.status(_httpStatus_1._httpStatusService.status.serverError)
                    .json(responseMessage_1.resObj.error(error));
            }
        });
    }
}
exports.AuthorController = new Author();
//# sourceMappingURL=author.controller.js.map