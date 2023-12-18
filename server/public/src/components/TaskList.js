import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import useTaskCalls from "../hooks/useTaskCalls";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import UpdateTaskModal from "./UpdateTaskModal";
import { useDispatch } from "react-redux";
import { openModal } from "../features/taskSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector((state)=>state.task);

    const [loading, setLoading] = useState(true)
    const {getTasks, deleteTask, getTask} = useTaskCalls();
    
  
    useEffect(() => {
      setLoading(true);
      getTasks();
      setLoading(false);
    }, [])

    const handleClick = (id)=>{
        getTask(id);
        dispatch(openModal());
    }
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(tasks && tasks.length === 0){
        return <section className="text-center pt-5 text-[#EEEDE8]">No tasks to show...</section>
    }
  return (
    <div className="p-5 text-[#EEEDE8]">
        {tasks?.map((task, index)=>{
            return(
                <div key={index} className="flex gap-5 justify-center items-center relative">
                    <h4>{task.name}</h4>
                    <h4>{task.deadline}</h4>
                    <FaPencilAlt onClick={()=>handleClick(task._id)} className="cursor-pointer"/>
                    <FaRegTrashCan onClick={()=>deleteTask(task._id)} className="cursor-pointer"/>
                </div>
            )
        })}
    </div>
  )
}

export default TaskList