"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    published: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "author"
    },
    price: {
        type: Number,
    }
}, { timestamps: true });
exports.bookModel = (0, mongoose_1.model)('book', bookSchema);
//# sourceMappingURL=books.js.map