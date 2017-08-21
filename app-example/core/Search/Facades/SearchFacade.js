const Facade = require.main.require('./core/Common/Facades/Facade');

class SearchFacade extends Facade {
    static getFacadeAccessor() { return 'SearchService' }
}

module.exports = SearchFacade;