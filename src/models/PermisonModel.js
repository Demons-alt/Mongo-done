const mongoose = require('../module/MongodbConnect');


const Permision = mongoose.model('permision', {
    Nama : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true
    },
    Izin : {
        type : String,
        require : true
    },
    Status : {
        type : String,
        require : true
    }
})


module.exports = Permision