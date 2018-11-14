"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express.default)();
server.get('/', function (req, res) {
  return res.status(200).send('ok');
});
server.get('/jenn', function (req, res) {
  return res.status(200).send('i love you, jenn <3');
});
var _default = server;
exports.default = _default;