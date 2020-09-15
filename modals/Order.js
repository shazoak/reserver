const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    order:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'users'
    },
    enrolment:{
        type:String,
        required:true,
    },
    status:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    Q:{
        type:String,
    },
    tables:{
        type:String,
    }
});

module.exports = mongoose.model('Order',OrderSchema);