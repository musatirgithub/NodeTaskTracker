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

  return (
    <section className="p-5 bg-slate-800 mx-auto lg:max-w-5xl">
    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-3" autoComplete="off">
      <section className="flex gap-3">
        <div className="flex flex-col gap-3">
      <label htmlFor="name" className="text-[#EEEDE8]">Task</label>
      <input type="text" name="name" id="name" required value={formData.task} onChange={handleChange}
      className="bg-[#D9C6A7] text-[#0D1732] focus:outline-none border border-gray-300 rounded py-2 px-4 block appearance-none placeholder-[#3A3B3C] h-[2.5rem] lg:w-[30rem]"/>
      </div>
      <div className="flex  flex-col gap-3">
      <label htmlFor="deadline" className="text-[#EEEDE8]">Deadline</label>
      <input type="datetime-local" name="deadline" id="deadline" required value={formData.deadline} onChange={handleChange}
      className="bg-[#D9C6A7] text-[#0D1732] focus:outline-none border border-gray-300 rounded py-2 px-4 block appearance-none placeholder-[#3A3B3C] h-[2.5rem] w-[9.5rem]"/>
      </div>
      </section>
      <button type="submit" className="btn btn-neutral">Submit</button>
    </form>
    </section>
  )
}

export default TaskForm