import { useState, useEffect } from "react";
import useTaskCalls from "../hooks/useTaskCalls";
import { useSelector } from "react-redux";
import { closeModal } from "../features/taskSlice";
import { useDispatch } from "react-redux";
import dateTimeFormatter from "../utils/dateTimeFormatter";

const UpdateTaskModal = () => {
  const dispatch = useDispatch();
    const {updateTask} = useTaskCalls();
    const {task} = useSelector((state)=>state.task);
    const [formData, setFormData] = useState({name:task?.name, deadline:task?.deadline});

    console.log("task", task);
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        updateTask(formData, task._id);
        setFormData({name:'', deadline:''});
        dispatch(closeModal());
    }

    useEffect(() => {
      setFormData({name:task?.name, deadline:dateTimeFormatter(task?.deadline)});
    }, [])
    

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-h-[screen-10rem]">
      <section>
        <div className="flex gap-3">
      <label htmlFor="name">Task</label>
      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}/>
      </div>
      <div className="flex gap-3">
      <label htmlFor="deadline">Deadline</label>
      <input type="datetime-local" name="deadline" id="deadline" required value={formData.deadline} onChange={handleChange}/>
      </div>
      </section>

      <button type="submit" className="btn btn-neutral">Update Task</button>
    </form>
  )
}

export default UpdateTaskModal