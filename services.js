var config = require('./packages/config');
var hasher = require('./packages/hasher');
var book   = require('./packages/book/book-service-provider');
var mongo  = require('./packages/mongo/mongo.provider');

module.exports = function (app) {

    app.use(config.serviceFactory(__dirname + '/config'));

    app.use(mongo.mongoProvider);

    app.use(hasher.ServiceProvider);

    app.use(book.bookServiceProvider);

};