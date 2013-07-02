var server_options={};
var db_options={
    w:-1,// 设置w=-1是mongodb 1.2后的强制要求，见官方api文档
    logger:{
        doDebug:true,
        debug:function(msg,obj){
            console.log('[debug]',msg);
        },
        log:function(msg,obj){
            console.log('[log]',msg);
        },
        error:function(msg,obj){
            console.log('[error]',msg);
        }
    }
};

var mongodb     = require("mongodb"),
    mongoserver = new mongodb.Server('localhost', 27017,server_options ),
    db          = new mongodb.Db('test', mongoserver, db_options);



module.exports = db;


function test_save(){
    //前一个db和后一个db，是同一个对象。
    db.open(function(err,db){
        if(err)return console.error(err);
        console.log('* mongodb connected');
        db.collection('foo').save({test:1},function(err,result){
            console.log(result);
            db.close();
        });
    })
}
// test_save();