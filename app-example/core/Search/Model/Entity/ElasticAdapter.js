const elasticsearch = require('elasticsearch');

class ElasticAdapter {
    constructor() {
        let auth = process.env.APP_ELASTIC_USER ?
                process.env.APP_ELASTIC_USER + ':' + process.env.APP_ELASTIC_PASS + '@' : '',
            host = process.env.APP_ELASTIC_HOST + ':' + process.env.APP_ELASTIC_PORT;

        this.esclient = new elasticsearch.Client({host: auth + host});
    }

    async get(index, type, id) {
        let response = null;

        await this.esclient.get({
            index: index,
            type: type,
            id: id
        }).then(function (res) {
            response = res;
        }, function (fail) {
            throw(fail.response);
        });

        return response;
    }

    put() {}
    push() {}
    delete() {}
}

module.exports = ElasticAdapter;