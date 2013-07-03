var mongodb = require('../../config/database')('user');
    User    = mongodb.user;


exports.save = function(db){
    User.save({name:'dca'}, function(err, data) {
        console.log(data);
    });
};
