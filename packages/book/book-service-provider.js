var BookRepository = require('./book-repository');

exports.bookServiceProvider = function (req, res, next) {
    req.app.bookRepository = new BookRepository(req.app.mongodb.collection('book'));
    next();
};

