import {useEffect, useState} from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useTaskCalls from "../hooks/useTaskCalls";

const Home = () => {
  // const [loading, setLoading] = useState(true)
  // const {getTasks} = useTaskCalls();


  // useEffect(() => {
  //   setLoading(true);
  //   getTasks();
  //   setLoading(false);
  // }, [])
  
  // if(loading){
  //   return(
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default Home