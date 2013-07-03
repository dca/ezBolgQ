var mongodb      = require('../../config/database')('post');
    Post         = mongodb.post;


exports.save = function(db){
    Post.save({name:'dca'}, function(err, data) {
        console.log(data);
    });
};
