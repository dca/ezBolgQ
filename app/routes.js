
/*
 * GET route.
 */
var user    = require('./controllers/user.js');
var post    = require('./controllers/post.js');


module.exports = function(app){

    var home = function(req, res){
      res.render('index', { title: 'Express' });
    };

    app.get('/', home);
    app.get('/reg', user.reg);
    app.get('/login', user.login);
    app.get('/users', user.list);

    //關於此應用
    app.get('/about', user.about);

    app.get('/post', post.list);
    app.get('/post/new', post.add);
    app.post('/post/new', post.add);

}


