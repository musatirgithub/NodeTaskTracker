import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useTaskCalls from "../hooks/useTaskCalls";

const Home = () => {
  const [loading, setLoading] = useState(true)
  const {getTasks} = useTaskCalls();
  const {tasks} = useSelector((state)=>state.task);

  useEffect(() => {
    setLoading(true);
    getTasks();
    setLoading(false);
  }, [])
  

  return (
    <div>
      <TaskForm/>
      {/* <TaskList tasks={tasks}/> */}
    </div>
  )
}

export default Home