const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    }
},{
    timestamp:true
})

module.exports = mongoose.model('Todo',todoSchema)