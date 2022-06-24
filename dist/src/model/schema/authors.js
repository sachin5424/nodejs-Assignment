"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorModel = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        lowercase: true
    },
    age: {
        type: Number,
    },
    dateOfBirth: {
        type: Date,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true });
exports.authorModel = (0, mongoose_1.model)('author', authorSchema);
//# sourceMappingURL=authors.js.map