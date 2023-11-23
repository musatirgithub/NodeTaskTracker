const Task = require('../models/task');
const CustomError = require('../errors')
const {StatusCodes} = require('http-status-codes');


const getAllTasks = async (req, res)=>{
    const tasks = await Task.find({}).sort('-isDone deadline')
    res.send('get all tasks')
}
const getTasks = async (req, res)=>{
    const tasks = await Task.find({user:req.user.userId}).select('-user').sort('-isDone deadline')
    res.status(StatusCodes.OK).json({tasks})
}
const createTask = async (req, res)=>{
    const {name, deadline} = req.body;
    if(!name || !deadline){
        throw new CustomError.BadRequestError('Please provide both name and deadline')
    }
    const task = await Task.create({name, deadline, user:req.user.userId})
    res.status(StatusCodes.CREATED).json({msg:'Success! Task created'})
}
const deleteTasks = async (req, res)=>{
    const {id:taskId} = req.params;
    const task = await Task.findOneAndDelete({_id:taskId});
    if(!task){
        throw new CustomError.NotFoundError(`No task with id: ${taskId}`)
    }
    res.status(StatusCodes.OK).json({msg:'Task deleted successfully'})
}
const updateTask = async (req, res)=>{
    const {id:taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {new:true, runValidators:true}).select('-user')
    if(!task){
        throw new CustomError.NotFoundError(`No task with ID: ${taskId}`);
    }
    res.status(StatusCodes.OK).json({task})
}
const getTask = async (req, res)=>{
    const {id:taskId} = req.params;
    const task = await Task.findOne({_id:taskId}).select('-user');
    if(!task){
        throw new CustomError.NotFoundError(`No task with ID: ${taskId}`);
    }
    res.status(StatusCodes.OK).json({task})
}

module.exports = {getAllTasks, getTasks, createTask, deleteTasks, updateTask, getTask};