"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const port = process.env.PORT || 1337;
var appName = 'test server';

_server.default.listen(process.env.PORT || 5000, function () {
  console.log("".concat(appName, " running on port: ").concat(process.env.PORT || 5000));
});