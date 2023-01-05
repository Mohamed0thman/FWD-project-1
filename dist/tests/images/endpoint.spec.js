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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const sharp_utiles_1 = require("../../utiles/sharp.utiles");
const HttpReqest = (0, supertest_1.default)(index_1.default);
describe("image end point", () => {
    beforeAll(sharp_utiles_1.removeAllThumbImage);
    it("should fail prams is not provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images");
        expect(response.status).toBe(422);
    }));
    it("should fail filename is not provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?width=100&height=100");
        expect(response.status).toBe(422);
    }));
    it("should fail width is not provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=image&height=100");
        expect(response.status).toBe(422);
    }));
    it("should fail height is not provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=100");
        expect(response.status).toBe(422);
    }));
    it("should fail height is string", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=100&height=abc");
        expect(response.status).toBe(422);
    }));
    it("should fail height is not vaild integer", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=100&height=-22");
        expect(response.status).toBe(422);
    }));
    it("should fail  width is string", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=abc&height=100");
        expect(response.status).toBe(422);
    }));
    it("should fail  width is not vaild integer", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=x100&height=100");
        expect(response.status).toBe(422);
    }));
    it("should fail image is not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=notFound&width=100&height=100");
        expect(response.status).toBe(404);
    }));
    it("create new image", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=100&height=100");
        expect(response.status).toBe(200);
    }));
    it("exist image", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api/images?filename=sunflower&width=100&height=100");
        expect(response.status).toBe(200);
    }));
    afterAll(sharp_utiles_1.removeAllThumbImage);
});
