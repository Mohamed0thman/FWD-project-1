"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existThumpImage = exports.existFullImage = exports.validateQuery = void 0;
const fs_1 = __importDefault(require("fs"));
const paths_1 = require("../paths");
const utiles_1 = require("../utiles/utiles");
const validateQuery = (request, _response, next) => {
    console.log("request.query", request.query);
    if (Object.keys(request.query).length < 3) {
        throw {
            message: ` please enter image name, width and height `,
            status: 422,
            error: new Error(),
        };
    }
    for (const item in request.query) {
        if (!request.query[item]) {
            throw {
                message: ` ${item} is required `,
                status: 422,
                error: new Error(),
            };
        }
        if ((item === "width" || item === "height") &&
            !(0, utiles_1.isInt)(request.query[item])) {
            throw {
                message: ` ${item} must be integer `,
                status: 422,
                error: new Error(),
            };
        }
    }
    next();
};
exports.validateQuery = validateQuery;
const existFullImage = (request, _response, next) => {
    console.log("request.query", request.query);
    const file = `${paths_1.fullPath}/${request.query.filename}.jpg`;
    if (!fs_1.default.existsSync(file)) {
        throw {
            message: ` image not found `,
            status: 404,
            error: new Error(),
        };
    }
    next();
};
exports.existFullImage = existFullImage;
const existThumpImage = (request, response, next) => {
    const { filename, width, height } = request.query;
    const thumpFile = `${paths_1.thumpPath}/${filename}-${width}x${height}.jpg`;
    if (fs_1.default.existsSync(thumpFile)) {
        return response.status(200).sendFile(thumpFile);
    }
    next();
};
exports.existThumpImage = existThumpImage;
