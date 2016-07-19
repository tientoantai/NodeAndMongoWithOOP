var config = require('./packages/config');
var hasher = require('./packages/hasher');

module.exports = function (app) {

    app.use(config.serviceFactory(__dirname + '/config'));

    app.use(hasher.ServiceProvider);

};