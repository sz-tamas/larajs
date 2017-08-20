const resolve = (handler) => {
    let handlerObj = handler.split('@'),
        handlerClass = require('../app/Http/Controllers/' + handlerObj[0]);

    return (new handlerClass())[handlerObj[1]]
};

module.exports = {
    get: (path, handler) => {
        return {
            method: 'get',
            path: path,
            handler: resolve(handler)
        }
    },
    post: (path, handler) => {
        return {
            method: 'post',
            path: path,
            handler: resolve(handler)
        }
    },
    put: (path, handler) => {
        return {
            method: 'put',
            path: path,
            handler: resolve(handler)
        }
    }
};