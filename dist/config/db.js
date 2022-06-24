"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    // var connectionString = `mongodb+srv://sachin:XReivM35vXKLqb5Y@cluster0.oiold.mongodb.net/newEcomm?retryWrites=true&w=majority`;4
    var connectionString = "mongodb+srv://sachin:URnb17mqFrVFqnT2@cluster0.fsuun.mongodb.net/nodeTsk?retryWrites=true&w=majority";
    // var connectionString = `mongodb+srv://sachin:XReivM35vXKLqb5Y@cluster0.oiold.mongodb.net/bookcare?retryWrites=true&w=majority`;
    mongoose_1.default.connect(connectionString);
    mongoose_1.default.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ", connectionString);
    });
    mongoose_1.default.connection.on('error', function (err) {
        console.log(("Mongoose default connection has occured " + err + " error"));
    });
    mongoose_1.default.connection.on('disconnected', function () {
        console.log(("Mongoose default connection is disconnected"));
    });
};
exports.connect = connect;
//# sourceMappingURL=db.js.map