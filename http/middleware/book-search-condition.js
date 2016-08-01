var KeywordCondition = require('./../../packages/book/condition/key-word-condition');

exports.buildKeywordCondition = function (req, res, next){
    req.app.condition = new KeywordCondition(req.query.keyword);
    next();
};

exports.build = function(req, res, next){
    req.app.condition = '';
    next();
};

