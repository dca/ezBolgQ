
/*
 * GET users listing.
 */

var User = require('../models/user');
var Post = require('../models/post');

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.reg = function(req, res){

    User.save();
    Post.save();

  res.render('user/reg', { title: '註冊' });
};

exports.login = function(req, res){
  res.render('user/login', { title: '登入' });
};