
/*
 * GET home page.
 */
var user    = require('./controllers/user.js');


module.exports = function(app){

    var home = function(req, res){
      res.render('index', { title: 'Express' });
    };

    app.get('/', home);
    app.get('/reg', user.reg);
    app.get('/login', user.login);

    app.get('/users', user.list);

}


