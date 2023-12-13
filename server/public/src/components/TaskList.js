

const TaskList = ({tasks}) => {
    console.log("tasks", tasks)
  return (
    <div>
        {tasks?.map((task, index)=>{
            return(
                <div key={index}>
                    <h4>{task.name}</h4>
                    <h4>{task.deadline}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default TaskList