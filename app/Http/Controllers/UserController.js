class UserController {
    constructor() {

    }

    index(req, res) {
        res.send('Hello World!');
    }
}

module.exports = UserController;