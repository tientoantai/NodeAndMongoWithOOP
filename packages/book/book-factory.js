var Book = require('./book');

var bookFactory = function (){

};

bookFactory.prototype.buildOne = function (rawData){
    return new Book();
};

module.exports = bookFactory;
