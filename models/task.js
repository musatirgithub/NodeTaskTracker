const { boolean } = require('joi');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a task']
    },
    deadline:{type:Date, required:true},
    isDone:{
        type:Boolean,
        default:false,
    }
}, {timestamps:true})

module.exports = mongoose.model('Task', TaskSchema)