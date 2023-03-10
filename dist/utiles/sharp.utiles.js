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
exports.removeAllThumbImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const paths_1 = require("../paths");
const fs_1 = __importDefault(require("fs"));
function resizeImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagePath = `${paths_1.fullPath}/${filename}.jpg`;
            const output = `${paths_1.thumpPath}/${filename}-${width}x${height}.jpg`;
            yield (0, sharp_1.default)(imagePath)
                .resize({
                width,
                height,
            })
                .toFile(output)
                .catch((error) => {
                throw error;
            });
            return output;
        }
        catch (error) {
            throw error;
        }
    });
}
const removeAllThumbImage = () => {
    fs_1.default.readdirSync(paths_1.thumpPath).forEach((item) => {
        fs_1.default.unlinkSync(path_1.default.join(paths_1.thumpPath, `/${item}`));
    });
};
exports.removeAllThumbImage = removeAllThumbImage;
exports.default = resizeImage;
