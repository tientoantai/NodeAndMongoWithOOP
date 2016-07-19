var express             = require('express');
var errorHandling       = require('./error');
var serviceRegistration = require('./services');
var routes              = require('./http/router');
var bodyParser          = require('body-parser');

var app = express();

serviceRegistration(app);

app.use(bodyParser.json());
app.use(routes);

errorHandling(app);

module.exports = app;
