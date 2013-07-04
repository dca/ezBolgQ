var express = require('express');

module.exports = function(app, config) {

    app.configure(function() {
        app.use(express.compress());
        console.log(config.root);
        app.use(require('less-middleware')({
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
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);

        // app.use(function(req, res) {
        //     res.status(404).render('404', {
        //         title: "404"
        //     });
        // });
    });

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

};


// app.use(express.favicon());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());