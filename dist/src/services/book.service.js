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
const _index_1 = require("../model/_index");
const _helper_1 = require("../utlis/_helper");
class BookService {
    constructor() { }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.bookModel.create(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.bookModel.findOne(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllBook() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, _helper_1.aggregate)(_index_1.bookModel, [
                    {
                        $lookup: {
                            from: 'authors',
                            localField: 'published',
                            foreignField: '_id',
                            as: 'author',
                        },
                    },
                    { $unwind: "$author" },
                    {
                        $addFields: {
                            "author_name": "$author.name",
                            "userId": "$author.userId",
                        }
                    },
                    {
                        $project: {
                            'author': 0,
                        }
                    }
                ]);
            }
            catch (error) {
                throw error;
            }
        });
    }
    relateddeleteBook(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.bookModel.deleteMany(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteBookOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.bookModel.deleteOne(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = BookService;
//# sourceMappingURL=book.service.js.map