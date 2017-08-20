const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');

class App {
    constructor() {
        this.app = express();

        this.app.use(helmet());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.disable('x-powered-by');
    }

    get(path, handler) {
        this.app.get(path, handler);
    }

    post(path, handler) {
        this.app.post(path, handler);
    }

    put(path, handler) {
        this.app.use(path, handler);
    }

    use(path, handler) {
        this.app.use(path, handler);
    }

    listen(port, method) {
        this.app.listen(port, method);
    }
}

module.exports = App;
