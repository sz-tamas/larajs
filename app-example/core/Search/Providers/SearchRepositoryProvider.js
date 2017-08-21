const ServiceProvider = require.main.require('./core/Common/Providers/ServiceProvider');
const SearchRepository = require('../Model/Repository/SearchRepository');
const ElasticAdapter = require('../Model/Entity/ElasticAdapter');

class SearchRepositoryProvider extends ServiceProvider {
    /**
     * Register any application services.
     *
     * @return void
     */
    register() {
        this.app.bind('SearchRepository', function() {
            return new SearchRepository(new ElasticAdapter());
        })
    }
}

module.exports = SearchRepositoryProvider;