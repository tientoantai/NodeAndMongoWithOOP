var express             = require('express');
var errorHandling       = require('./error');
var serviceRegistration = require('./services');
var routes              = require('./http/router');
var bodyParser          = require('body-parser');
var nunjuck             = require('express-nunjucks');
var app = express();

serviceRegistration(app);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/template');
app.set('views-engine', 'html');

nunjuck.setup({
    autoescape  : true,
    watch       : true
}, app);

app.use(routes);

errorHandling(app);

module.exports = app;
