const Controller = require.main.require('./core/Common/Http/Controller/Controller');

class UserController extends Controller {
    index(req, res) {
        return res.send('Hello World!');
    }
}

module.exports = UserController;