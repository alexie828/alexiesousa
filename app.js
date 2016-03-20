/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var Handlebars = require('handlebars');

var main = require('./routes/main');
var about = require('./routes/about');
var proj1 = require('./routes/proj1');
var proj2 = require('./routes/proj2');
var proj3 = require('./routes/proj3');

var app = express();

// all environments
app.set('port', process.env.PORT || 828);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser('as_cookie'));
app.use(express.session({secret: 'as_secret'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', main.view);
app.get('/about', about.view);
app.get('/proj1', proj1.view);
app.get('/proj2', proj2.view);
app.get('/proj3', proj3.view);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});