"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Helper function to validate a json web token.
 */

exports.default = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req) {
        var token, response, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = parseToken(req);
                        _context.prev = 1;

                        if (token) {
                            _context.next = 4;
                            break;
                        }

                        throw "Please provide a key: ?key= or ?token=";

                    case 4:
                        _context.next = 6;
                        return (0, _nodeFetch2.default)("http://pacific-refuge-84094.herokuapp.com/api/login/verify?token=" + token);

                    case 6:
                        response = _context.sent;
                        _context.next = 9;
                        return response.json();

                    case 9:
                        json = _context.sent;

                        if (json.success) {
                            _context.next = 12;
                            break;
                        }

                        throw "Incorrect key";

                    case 12:
                        _context.next = 17;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](1);
                        return _context.abrupt("return", {
                            success: false,
                            message: _context.t0
                        });

                    case 17:
                        return _context.abrupt("return", {
                            success: true
                        });

                    case 18:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 14]]);
    }));

    function verifyToken(_x) {
        return ref.apply(this, arguments);
    }

    return verifyToken;
}();

function parseToken(req) {
    var _req$query = req.query;
    var requestKey = _req$query.key;
    var requestToken = _req$query.token;
    var _req$body = req.body;
    var bodyKey = _req$body.key;
    var bodyToken = _req$body.token;


    return requestKey || bodyKey || requestToken || bodyToken;
}