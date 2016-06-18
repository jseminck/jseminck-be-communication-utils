"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = verifyToken;

require("babel-polyfill");

var _verifyToken = require("./authentication/verifyToken");

var _verifyToken2 = _interopRequireDefault(_verifyToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyToken() {
    (0, _verifyToken2.default)();
}