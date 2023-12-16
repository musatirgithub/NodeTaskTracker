const { boolean } = require('joi');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a task']
    },
    deadline:{type:Date, required:true},
    completed:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    }
}, {timestamps:true})

module.exports = mongoose.model('Task', TaskSchema)