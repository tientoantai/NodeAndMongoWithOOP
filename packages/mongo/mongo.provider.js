var mongodb       = require('mongodb');
var MongoClient = mongodb.MongoClient;

exports.mongoProvider = function (request, response, next) {
    var config = request.app.config;
    MongoClient.connect(config.configOrEnv(config.mongo.url.default), function (error, connection) {
        if (error) return next(error);
        request.app.mongodb = connection;
        next();
    });
};