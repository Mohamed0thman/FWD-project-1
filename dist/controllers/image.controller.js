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
exports.getImage = void 0;
const sharp_utiles_1 = __importDefault(require("../utiles/sharp.utiles"));
const getImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filename = req.query.filename, width = parseInt(req.query.width), height = parseInt(req.query.height);
        const image = yield (0, sharp_utiles_1.default)(filename, width, height);
        return res.status(200).sendFile(image);
    }
    catch (err) {
        next(err);
    }
});
exports.getImage = getImage;
