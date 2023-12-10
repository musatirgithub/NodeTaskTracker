import { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const {resetPassword} = useAuthCalls();

  const handleChange = (e)=>{
    setPassword(e.target.value)
  }
  
  const query = useQuery();
  console.log("query", query);
  
  const userInfo = {
    email: query.get("email"),
    token: query.get("token"),
    password: password,
  }

  console.log(userInfo);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    resetPassword(userInfo);

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-10rem)]">
    <section>
    <div className="flex gap-3">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" required value={password} onChange={handleChange}/>
    </div>
    </section>
    <button type="submit" className="btn btn-neutral">Submit New Password</button>
  </form>
  )
}

export default ResetPassword