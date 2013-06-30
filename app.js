
/**
 * Module dependencies.
 */

var express = require('express'),
    http    = require('http'),
    path    = require('path');

var routes  = require('./app/routes');

var app = module.exports = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({
  src: __dirname + '/src/less',
  // paths  : [ 'src/components/bootstrap/less' ],
  dest: __dirname + '/public/stylesheets',
  prefix: '/stylesheets',
  compress: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// 統一管理route
routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
