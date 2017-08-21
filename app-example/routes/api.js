const Route = require.main.require('./core/Router').Route;

module.exports = [
    Route.get('/', 'UserController@index'),
    Route.get('/search', 'Search/SearchController@search')
];