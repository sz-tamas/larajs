const Route = require('../core/Route');

module.exports = [
    Route.get('/', 'UserController@index'),
];