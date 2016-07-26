var Book = function () {
    this.attribute = {};
};

Book.prototype.setName = function (name){
    this.attribute.name = name;
    return this;
};

module.exports = Book;