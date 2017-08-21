// https://www.elastic.co/products/elasticsearch
//
const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({
    host: 'elastic:changeme@npsearch:9200'
});
esclient.get({
    index: 'movies',
    type: 'movie',
    id: 1
    }
).then(
    function (response) {
        console.log(response);
    },
    function (fail) {
        console.error(fail.response);
    }
);