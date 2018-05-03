'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({host: 'localhost', port: 8000});

// Add routes
const routes = require('./config/routes');
server.route(routes);

// Start the server
const init = async () => {

  //Basic logging to our application
  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: false,
      logEvents: ['response ']
    }
  });

  //Set up vision templates
  await server.register(require('vision'));

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './app/templates'
  });

  //Set up inert fot Serve Static Files (Images, JS, CSS, etc.)
  await server.register(require('inert'));

  server.route({
    path: "/public/{path*}",
    method: "GET",
    handler: {
      directory: {
        path: "./public",
        listing: false,
        index: false
      }
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
