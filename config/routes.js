'use strict';

const tasks_controller = require('../app/controllers/tasksController');

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: tasks_controller.index
  }, {
    method: 'GET',
    path: '/users',
    handler: tasks_controller.users
  }, {
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
      return `Hello, ${encodeURIComponent(request.params.name)} and welcome!`;
    }
  }
];

module.exports = routes;
