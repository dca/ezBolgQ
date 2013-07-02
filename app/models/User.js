var mongojs = require('mongojs');
var db      = mongojs('mongodb://127.0.0.1/ezblogq_dev', ['user']);
var User    = db.user;

exports.save = function(db){
    User.save({name:'dca'}, function(err) {

    });
};
