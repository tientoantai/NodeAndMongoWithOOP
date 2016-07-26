exports.build = function(req, res, next){
    req.app.condition = 'all';
    next();
};

