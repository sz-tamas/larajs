const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');

const config = require.main.require('./config/app');
let closures = {};
let bound = {};

const boot = function(app) {
    (config.providers || []).forEach(function(provider, index) {
        config.providers[index] = new provider(app);
        config.providers[index].boot();
    });
};

const register = function() {
    (config.providers || []).forEach(function(provider) {
        provider.register();
    });
};

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

    /**
     * Bind handler to closure
     * @param closure
     * @param handler
     */
    bind(closure, handler) {
        closures[closure] = handler.bind(this);
    }

    /**
     * Make the closure bound
     * @param closure
     * @returns {*}
     */
    make(closure) {
        bound[closure] = closures[closure].call(this);

        return bound[closure];
    }

    /**
     * Return alias bound closure
     * @param alias
     * @returns {*}
     */
    static load(alias) {
        let closure = config.aliases[alias].getFacadeAccessor();

        if (!bound[closure]) {
            bound[closure] = closures[closure]();
        }

        return bound[closure];
    }

    start() {
        boot(this);

        register();

        this.app.listen(config.port, function() {
            if (process.env.APP_DEBUG) {
                console.info(`Running at port ${config.port}`);
            }
        });
    }
}

module.exports = App;
