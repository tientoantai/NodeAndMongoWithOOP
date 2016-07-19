var BCryptAdapter   = require('./bcrypt');
var bcryptCore      = require('bcrypt');

exports.BCrypt = BCryptAdapter;

exports.ServiceProvider = function (request, response, next) {
    var config = request.app.config;

    request.app.hasher = new BCryptAdapter(bcryptCore);
    request.app.hasher.setRound(config.configOrEnv(config.bcrypt.round));
    request.app.hasher.setKey(config.configOrEnv(config.app.key));
    next();
};
