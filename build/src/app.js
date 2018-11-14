"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 1337;
var appName = 'JENN7433 SERVER';

_server.default.listen(port, function () {
  console.log("".concat(appName, " running on port: ").concat(port));
});