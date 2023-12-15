import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTaskCalls from "../hooks/useTaskCalls";
import { useSelector } from "react-redux";

const UpdateTaskModal = ({_id, name, deadline, isDone}) => {
    const {updateTask, getTask} = useTaskCalls();
    
    useEffect(() => {
        getTask(_id);
    }, [])
    
    const {task, closeModal} = useSelector((state)=>state.task);
    const [formData, setFormData] = useState({name:task?.name, deadline:task?.deadline})

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        updateTask(formData);
        setFormData({name:'', deadline:''});
        closeModal();

    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-h-[screen-10rem]">
      <section>
        <div className="flex gap-3">
      <label htmlFor="name">Task</label>
      <input type="text" name="name" id="name" required value={formData.task} onChange={handleChange}/>
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