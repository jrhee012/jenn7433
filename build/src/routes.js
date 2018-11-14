"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _homeControllers = _interopRequireDefault(require("./controllers/homeControllers"));

var _jennControllers = _interopRequireDefault(require("./controllers/jennControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(server) {
  server.get('/', _homeControllers.default.index);
  server.get('/jenn', _jennControllers.default.index);
  server.post('/jenn', _jennControllers.default.post);
};

exports.default = _default;