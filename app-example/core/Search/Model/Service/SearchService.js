class SearchService {
    constructor(repository) {
        this.repository = repository;
    }

    get(data = {}) {
        return this.repository.get(data);
    }
}

module.exports = SearchService;