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
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const HttpReqest = (0, supertest_1.default)(index_1.default);
describe("App", () => {
    it("App is runing", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/");
        expect(response.status).toBe(200);
    }));
});
describe("user lost", () => {
    it("enter api not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield HttpReqest.get("/api");
        expect(response.status).toBe(404);
    }));
});
