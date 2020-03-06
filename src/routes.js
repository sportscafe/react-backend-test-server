'use strict';

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

            return {
                banners : [
                    {
                        img_url     : 'http://somelink.jpg',
                        redirect    : true,
                        route       : '/contests' 
                    },
                    {
                        img_url     : 'http://somelink.jpg',
                        redirect    : true,
                        route       : '/transactions' 
                    },
                    {
                        img_url     : 'http://somelink.jpg',
                        redirect    : false,
                        route       : null
                    },
                ]
            };
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

    return server;
};

init();