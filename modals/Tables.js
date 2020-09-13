const mongoose = require('mongoose');

const TableSchema = mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'admins'
    },
    chairs:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"open"
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Table',TableSchema);