var express = require('express');
var router  = express.Router();

var controller = require('./controller');
var middleware = require('./middleware');

router.get('/', controller.BookController.home);

router.get('/add', controller.BookController.add);

router.get('/book/:bookId', controller.BookController.detail);

router.post('/book', controller.BookController.create);

module.exports = router;
