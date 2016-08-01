var KeywordCondition = function (keyword) {
    this.keyword = keyword;
};

KeywordCondition.prototype.buildKeywordCondition = function(){
    return { $or: [ { "name": {$regex: this.keyword} },
        { "author": {$regex: this.keyword} },
        { "publisher": {$regex: this.keyword} } ] }
};

module.exports = KeywordCondition;