var Book = require('./book');

var BookRepository = function (collection){
    this.collection = collection;
};

BookRepository.prototype.listAll = function () {
    return this.collection.find().toArray();
};

BookRepository.prototype.add = function (book) {
    return this.collection.insert(book);
};

BookRepository.prototype.update = function () {

};

BookRepository.prototype.detail = function () {
    return this.collection.find()
};

BookRepository.prototype.search = function () {

};

module.exports = BookRepository;