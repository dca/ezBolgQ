    var mongojs = require('mongojs');
    var config  = require('./config');

    var db      = mongojs( config.db );

module.exports = function (collection) {
    db.collection( collection );
    return db;
};

// var db      = require('../../config/database')('post');
//     Post    = db.post;