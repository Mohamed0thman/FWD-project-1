"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`\nApplication started in http://localhost:${port}`);
});
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.get("/", (_request, response) => {
    response.send("welcome ");
});
app.use((_req, res) => {
    res.status(404).json({
        message: "ohh you are lost",
    });
});
app.use(error_middleware_1.default);
exports.default = app;
