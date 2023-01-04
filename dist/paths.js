"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumpPath = exports.fullPath = exports.srcPath = void 0;
const path_1 = __importDefault(require("path"));
exports.srcPath = __dirname;
exports.fullPath = path_1.default.join(__dirname, "/images/fullImages");
exports.thumpPath = path_1.default.join(__dirname, "./images/thumpImages");
