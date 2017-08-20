const App = require('./core/App');
const Router = require('./core/Router');
const config = require('./config/app');
const routes = require('./routes');

const app = new App();
const router = new Router(app, routes);

router.register();

app.listen(config.port, function() {
    if (process.env.APP_DEBUG) {
        console.info(`Running at port ${config.port}`);
    }
});