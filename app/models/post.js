var mongojs = require('mongojs');
var db      = mongojs('mongodb://127.0.0.1/ezblogq_dev', ['post']);
var Post    = db.post;

exports.save = function(db){
    Post.save({name:'dca'}, function(err, data) {
        console.log(data);
    });
};
