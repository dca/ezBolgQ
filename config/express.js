var express = require('express');
var compression = require('compression');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');


module.exports = function(app, config) {

    app.use(compression());
    console.log(config.root);
    app.use(lessMiddleware(config.root + '/src/less',{
        paths   : [ config.root + '/src/components/bootstrap/less'],
        src     : config.root + '/src/less',
        dest    : config.root + '/public/stylesheets',
        prefix  : '/stylesheets',
        compress: true
    }));
    app.use(express.static(config.root + '/public'));
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');
    // app.use(express.favicon(config.root + '/public/img/favicon.ico'));
    // app.use(express.logger('dev'));
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(cookieParser('your secret here'));
    app.use(session({ secret: 'keyboard cat' }));

    // app.use(app.router);



    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

};


// app.use(express.favicon());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
