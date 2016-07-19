var parser = require('./config-parser');

module.exports = function (configDirectory) {
    return function (request, response, next) {
        request.app.config = parser(configDirectory);
        next();
    }
};