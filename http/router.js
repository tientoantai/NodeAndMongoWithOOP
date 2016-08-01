var express = require('express');
var router  = express.Router();

var controller = require('./controller');
var middleware = require('./middleware');

router.get('/', controller.BookController.home);

router.get('/add', controller.BookController.add);

router.get('/book/:bookId', controller.BookController.detail);

router.get('/edit/:bookId', controller.BookController.edit);

router.post('/book', controller.BookController.create);

router.post('/update/:bookId', controller.BookController.update);

router.get('/search', middleware.BookSearchCondition.buildKeywordCondition, controller.BookController.search);

module.exports = router;
