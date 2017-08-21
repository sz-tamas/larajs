const Controller = require.main.require('./core/Common/Http/Controller/Controller');
const App = require.main.require('./core/App');

class SearchController extends Controller {
    async search(req, res) {
        let search = App.load('Search');

        let response = await search.get({
            index: 'movies',
            type: 'movie',
            id: 1
        });

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
}

module.exports = SearchController;