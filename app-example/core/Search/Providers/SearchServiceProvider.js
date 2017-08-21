const ServiceProvider = require.main.require('./core/Common/Providers/ServiceProvider');
const SearchService = require('../Model/Service/SearchService');

class SearchServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     *
     * @return void
     */
    register() {
        this.app.bind('SearchService', function() {
            return new SearchService(this.make('SearchRepository'))
        });
    }
}

module.exports = SearchServiceProvider;