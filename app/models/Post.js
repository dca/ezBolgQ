var mongodb      = require('../../config/database')('post');
    Post         = mongodb.post;


exports.save = function(arg, callback){
    Post.save( arg, function(err, data) {
        if (err) {
            callback(err);
        }else{
            // console.log(data);
            callback(null, data);
        }

    });
};

exports.find = function(arg, callback){
    Post.find( arg, function(err, data) {
        // console.log(data);
        callback(null, data);
    });
};