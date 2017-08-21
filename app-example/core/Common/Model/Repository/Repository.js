class Repository {
    constructor(model) {
        this.model = model;
    }

    get(data = []) {
        return this.model.get(data);
    }
}

module.exports = Repository;