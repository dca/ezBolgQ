
var Post = require('../models/Post');


exports.list = function(req, res){
    Post.find( {}, function (err, result) {
        // console.log(data);
        res.render('post/index', {
            title: '文章列表',
            data: (result || [])
        });
    });
};

exports.add = function(req, res){
    if (req.route.method === 'post') {
        var arg = {
            title : req.body.title,
            content: req.body.content
        };
        // console.log('[Debug]', 'POST /post/new' , arg);

        Post.save(arg, function(err, data) {
            res.redirect('/post');
        });

    }else{
        console.log('[Debug]', 'Get /post/new');
        res.render('post/add', { title: '新增文章' });
    }

};
