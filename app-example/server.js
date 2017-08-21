const App = require.main.require('./core/App');
const Router = require.main.require('./core/Router').Router;
const routes = require.main.require('./routes');

const app = new App();
const router = new Router(app, routes);

router.register();

app.start();
