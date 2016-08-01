
exports.home = function (req, res) {
    req.app.bookRepository.listAll().then(function (books) {
        res.render('home.nj.html', {books: books});
    });
};

exports.add = function (req, res) {
    res.render('addNew.nj.html');
};

exports.create = function (req, res) {
    req.app.bookRepository.add(req.body).then(function(){
        res.redirect('/');
    });
};

exports.detail = function (req, res) {
    req.app.bookRepository.detail(req.params.bookId)
        .then(function(book){
            res.render('detail.nj.html', {book:book});
        });
};

exports.edit = function(req, res){
    req.app.bookRepository.detail(req.params.bookId)
        .then(function(book){
            res.render('edit.nj.html', {book:book});
        });
};

exports.update = function (req, res) {
    req.app.bookRepository.update(req.body, req.params.bookId).then(function(){
        res.redirect('/');
    });
};