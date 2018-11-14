"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var pageMsg = 'i love you, jenn <3';

var sendRenderResponse = function sendRenderResponse(res) {
  var data = {
    jenn_msg: pageMsg
  };
  return res.status(200).render('pages/jenn/index', data);
};

var _default = {
  // index: (req, res) => res.status(200).send(pageMsg),
  index: function index(req, res) {
    return sendRenderResponse(res);
  },
  post: function post(req, res) {
    console.log('jenn req params: ', req.params);
    console.log('jenn req body: ', req.body);
    console.log(req.query);
    console.log('req: ', req);
    var message = req.params.message || pageMsg;
    pageMsg = message; // return sendRenderResponse(res);

    return res.status(200);
  }
};
exports.default = _default;