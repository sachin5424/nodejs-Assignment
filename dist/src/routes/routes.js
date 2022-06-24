"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const _index_1 = require("../controller/_index");
const _index_2 = require("../validations/_index");
const request_validations_middleware_1 = require("../middleware/request-validations.middleware");
const router = (0, express_1.Router)();
// all books routes 
exports.BookRoutes = [
    router.post('/private/author', _index_2.validations.createAuthor, request_validations_middleware_1.validRequest, _index_1.AuthorController.createAuthor),
    router.get('/private/author', _index_1.AuthorController.authorList),
    router.get('/private/book', _index_1.BookController.bookList),
    router.get('/private/author/:id', _index_1.AuthorController.authorRelated),
    router.delete('/private/author/:id', _index_1.AuthorController.delete),
    router.post('/private/book', _index_2.validations.createBook, request_validations_middleware_1.validRequest, _index_1.BookController.createBook) // create book 
    ,
    router.delete('/private/book/:id', _index_1.BookController.deleteBook),
    router.post('/auth/register', _index_2.validations.createUser, request_validations_middleware_1.validRequest, _index_1.UserController.createUser),
    router.post('/auth/login', _index_2.validations.loginUser, request_validations_middleware_1.validRequest, _index_1.UserController.userlogin)
];
//deleteBook
// end all books routes
//# sourceMappingURL=routes.js.map