'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = verifyToken;

var _verifyToken = require('./authentication/verifyToken');

var _verifyToken2 = _interopRequireDefault(_verifyToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function verifyToken(params) {
    _verifyToken2.default.apply(undefined, _toConsumableArray(params));
}