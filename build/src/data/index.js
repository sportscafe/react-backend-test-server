"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flat = _interopRequireDefault(require("flat"));

var _responses = _interopRequireDefault(require("./responses.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configJson = _responses.default;
var data = {
  get: function get(key) {
    return configJson[key];
  },
  set: function set(key, value) {
    configJson[key] = value;
  },
  getRandom: function getRandom(key) {
    return configJson[key][Math.floor(Math.random() * configJson[key].length)];
  },
  getRandomList: function getRandomList(key) {
    var size = configJson[key].length;
    var min = 2;
    var max = size;
    var op_size = Math.floor(Math.random() * (max - min + 1) + min);
    var data = [];

    for (var i = 0; i < op_size; i++) {
      data.push(configJson[key][i]);
    }

    return data;
  }
};
var _default = data;
exports.default = _default;