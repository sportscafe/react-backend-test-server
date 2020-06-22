"use strict";

import { home, wallet, contests } from "./src/routes";

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"]
      }
    }
  });

  const routes = [
    {
      method: "GET",
      path: "/home",
      handler: (request, h) => home()
    },
    {
      method: "GET",
      path: "/wallet",
      handler: (request, h) => wallet()
    },
    {
      method: "GET",
      path: "/contest",
      handler: (request, h) => contests()
    }
  ];

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);

  return server;
};

init();
