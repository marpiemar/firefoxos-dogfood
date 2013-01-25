
/**
 * Module dependencies.
 */

var express = require('express')
  , feedback = require('./routes/feedback')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , config = require('./config.js');

var app = express();

mongoose.connect('mongodb://' + config.host + '/' + config.ddbbName);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', feedback.home);
app.post('/', feedback.formHandler);
app.get('/feedback', feedback.form);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
