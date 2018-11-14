"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// export const index = (req, res) => res.render('pages/home');
// export const get = (req, res) => res.status(200).send('ok');
var _default = {
  index: function index(req, res) {
    return res.status(200).render('pages/home');
  }
};
exports.default = _default;