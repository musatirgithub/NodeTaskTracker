import { useState } from "react";
import { Link } from "react-router-dom";
import useTaskCalls from "../hooks/useTaskCalls";

const TaskForm = () => {
    const {createTask} = useTaskCalls();
    const [formData, setFormData] = useState({name:'', deadline:''})

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask(formData);
        setFormData({name:'', deadline:''});
    }
    console.log("formData", formData)
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
      <h4>
        <Link to='/forgot-password' className="btn btn-link">Forgot Password?</Link>
      </h4>
      <button type="submit" className="btn btn-neutral">Submit</button>
    </form>
  )
}

export default TaskForm