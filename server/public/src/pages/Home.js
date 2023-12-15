import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import UpdateTaskModal from "../components/UpdateTaskModal";

const Home = () => {
  const {isModalOpen} = useSelector((state)=>state.task);
const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(false)
}, [])

if(loading){
  return <div>Loading...</div>
}

  return (
    <div className="relative">
      <TaskForm/>
      <TaskList/>
      {isModalOpen && <UpdateTaskModal/>}
    </div>
  )
}

export default Home