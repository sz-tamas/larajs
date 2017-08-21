const Repository = require.main.require('./core/Common/Model/Repository/Repository');

class SearchRepository extends Repository {
    get (data = {}) {
        return this.model.get(data['index'], data['type'], data['id']);
    }
}

module.exports = SearchRepository;