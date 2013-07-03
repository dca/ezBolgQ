var mongodb      = require('../../config/database')('post');
    Post         = mongodb.post;


exports.save = function(arg){
    Post.save( arg, function(err, data) {
        console.log(data);
    });
};

exports.find = function(arg, callback){
    Post.find( arg, function(err, data) {
        // console.log(data);
        callback(null, data);
    });
};