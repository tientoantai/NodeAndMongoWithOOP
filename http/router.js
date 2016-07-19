var express = require('express');
var router  = express.Router();

router.get('/', function (request, response) {

    response.json({title: 'TrueBanker'});
});

router.get('/hash', function (request, response) {
    response.json(request.app.hasher.generate());
});

module.exports = router;
