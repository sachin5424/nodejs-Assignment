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
const mongoose_1 = __importDefault(require("mongoose"));
const _index_1 = require("../model/_index");
const _helper_1 = require("../utlis/_helper");
class authorService {
    constructor() { }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.authorModel.create(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.authorModel.findOne(payload);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllAuthor() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.authorModel.find().sort({ createdAt: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
    relatedBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, _helper_1.aggregate)(_index_1.authorModel, [
                    {
                        $match: { _id: new mongoose_1.default.Types.ObjectId(id) }
                    },
                    {
                        $lookup: {
                            from: 'books',
                            localField: '_id',
                            foreignField: 'published',
                            as: 'books',
                        },
                    },
                ]);
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteAuthor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _index_1.authorModel.deleteOne({ _id: id });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = authorService;
//# sourceMappingURL=author.service.js.map