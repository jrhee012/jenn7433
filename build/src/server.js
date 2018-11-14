"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'dev'; // set views directory

var viewsPath = './src/views';
var publicPath = __dirname + '/public';

if (env === 'production') {
  viewsPath = './build/src/views';
  publicPath = __dirname + '/public';
}

console.log(publicPath);
var server = (0, _express.default)(); // use ejs for view engine for express server

server.set('views', _path.default.resolve(viewsPath));
server.set('view engine', 'ejs'); // middleware

server.use(_express.default.static(publicPath));
server.use(_bodyParser.default.json());
server.use(_bodyParser.default.urlencoded({
  extended: false
}));
server.use((0, _morgan.default)('[:date[iso]] :method :url :status :response-time ms :remote-addr :remote-user'));
(0, _routes.default)(server);
var _default = server;
exports.default = _default;