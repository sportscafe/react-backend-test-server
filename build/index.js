'use strict';

var _routes = require("./src/routes");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Hapi = require('@hapi/hapi');

var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var server = Hapi.server({
      port: 3000,
      host: 'localhost'
    });
    var routes = [{
      method: 'GET',
      path: '/home',
      handler: (request, h) => (0, _routes.home)()
    }, {
      method: 'GET',
      path: '/wallet',
      handler: (request, h) => (0, _routes.wallet)()
    }];
    server.route(routes);
    yield server.start();
    console.log('Server running on %s', server.info.uri);
    return server;
  });

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();