"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wallet = exports.home = void 0;

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var home = () => {
  return {
    user_name: _data.default.getRandom("user_names"),
    banners: _data.default.get("banners"),
    sports: _data.default.get("sports"),
    challenges: _data.default.get("challenges")
  };
};

exports.home = home;

var wallet = () => {
  return {
    wallet_balance: _data.default.getRandom("wallet_balances"),
    transactions: _data.default.getRandomList("transactions"),
    withdrawals: _data.default.getRandomList("withdrawals")
  };
};

exports.wallet = wallet;