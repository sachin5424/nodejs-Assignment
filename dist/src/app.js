"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_token_middleware_1 = require("./middleware/jwt-token.middleware");
const routes_1 = require("./routes/routes");
// AdminJs.registerAdapter(AdminjsMongo);
const cors_1 = __importDefault(require("cors"));
class Application {
    constructor() {
        this.adminJsOptions = {};
        this._instance = (0, express_1.default)();
        this._instance.use((0, cors_1.default)());
        this._instance.use(express_1.default.json());
        this._instance.use('/api/private', jwt_token_middleware_1.JWT_TOKEN);
        this._instance.use('/api/', routes_1.BookRoutes);
        // this._instance.use(adminJs.options.rootPath,adminJsRoutes)
    }
    get instance() {
        return this._instance;
    }
}
exports.default = new Application();
//# sourceMappingURL=app.js.map