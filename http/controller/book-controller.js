
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