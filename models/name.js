var db = require('./dbNames');

exports.create = function(pName, callback){
    var names = {
        name: pName
    }
    
    db.insert(names, callback);
}

exports.delete = function(id, cb){
    db.remove({_id: id},{},cb);
}

//Get All Names
exports.all = function(cb) {
    db.find({}).sort({
     updatedAt: -1
    }).exec(cb)
}
   