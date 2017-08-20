class Router {
    constructor(app, routes={}) {
        this.app = app;
        this.routes = routes;
    }

    register() {
        (this.routes.api || []).forEach((route) => {
            this.app[route.method](route.path, route.handler)
        });

        // TODO: register web routes
        // (this.routes.web || []).forEach((route) => {
        //     this.app[route.method](route.path, route.handler)
        // })
    }

    redirect() {
        // TODO: implement
    }
}

module.exports = Router;