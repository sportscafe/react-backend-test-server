'use strict';

import {home} from './src/routes';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/home',
        handler: (request, h) => {

            return home();
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

    return server;
};

init();