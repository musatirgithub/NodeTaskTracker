

const getAllTasks = async (req, res)=>{
    req.send('get all tasks')
}
const getTasks = async (req, res)=>{
    req.send('get users tasks')
}
const createTask = async (req, res)=>{
    req.send('create task')
}
const deleteTasks = async (req, res)=>{
    req.send('delete task')
}
const updateTask = async (req, res)=>{
    req.send('update task')
}
const getTask = async (req, res)=>{
    req.send('get single task')
}

module.exports = {getAllTasks, getTasks, createTask, deleteTasks, updateTask, getTask};