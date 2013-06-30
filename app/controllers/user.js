
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.reg = function(req, res){
  res.render('user/reg', { title: '註冊' });
};

exports.login = function(req, res){
  res.render('user/login', { title: '登入' });
};