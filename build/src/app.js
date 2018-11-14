"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 1337;
var appName = 'test server';

_server.default.listen(port, function (err) {
  if (err) console.log(err);
  console.log("".concat(appName, " running on port: ").concat(port));
});