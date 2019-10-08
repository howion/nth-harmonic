"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var math_digamma_1 = __importDefault(require("math-digamma"));
var GAMMA = 0.5772156649015329;
function nthHarmonic($n) {
    return math_digamma_1.default($n + 1) + GAMMA;
}
exports.default = nthHarmonic;
