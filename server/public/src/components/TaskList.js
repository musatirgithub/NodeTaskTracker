import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import useTaskCalls from "../hooks/useTaskCalls";

const TaskList = () => {
    const {tasks} = useSelector((state)=>state.task);
    

    const [loading, setLoading] = useState(true)
    const {getTasks} = useTaskCalls();
  
  
    useEffect(() => {
      setLoading(true);
      getTasks();
      setLoading(false);
    }, [])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
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