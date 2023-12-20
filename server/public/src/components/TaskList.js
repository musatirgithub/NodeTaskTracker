import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import useTaskCalls from "../hooks/useTaskCalls";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import UpdateTaskModal from "./UpdateTaskModal";
import { useDispatch } from "react-redux";
import { openModal } from "../features/taskSlice";
import dateTimeConverter from "../utils/dateTimeConverter";
import remainingDays from "../utils/remainingDays";

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
    <div className="p-1 text-[#EEEDE8]">
        <h3 className="text-center text-2xl">Tasks</h3>
        <div className="flex lg:w-[64rem] mx-auto">
            <h4 className="lg:w-[35rem] text-center">Task</h4>
            <h4 className="lg:w-[19rem] text-center">Deadline</h4>
            <h4 className="lg:w-[5rem] text-center">Edit</h4>
            <h4 className="lg:w-[5rem] text-center">Delete</h4>
        </div>
        {tasks?.map((task, index)=>{
            const remainder = remainingDays(task.deadline)
            console.log("remainder", index, remainder)
            return(
                <div key={index} className="flex gap-5 justify-center items-center lg:w-[64rem] mx-auto">
                    {remainder && <IoWarning color={remainder}/>}
                    <h4 className="lg:w-[35rem] text-center">{task.name}</h4>
                    <h4 className="lg:w-[19rem] text-center">{dateTimeConverter(new Date(task.deadline))}</h4>
                    <h4 className="lg:w-[5rem] text-center"><FaPencilAlt onClick={()=>handleClick(task._id)} className="cursor-pointer"/></h4>
                    <h4 className="lg:w-[5rem] text-center"><FaRegTrashCan onClick={()=>deleteTask(task._id)} className="cursor-pointer"/></h4>
                </div>
            )
        })}
    </div>
  )
}

export default TaskList