import { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";


const Login = () => {
  const {register} = useAuthCalls();
  const [userInfo, setUserInfo] = useState({name:'', email:'', password:''})

  const handleChange = (e)=>{
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    register(userInfo);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="name" name="name" id="name" required value={userInfo.name} onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required value={userInfo.email} onChange={handleChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required value={userInfo.password} onChange={handleChange}/>
      <button type="submit" className="text-2xl underline">Submit</button>
    </form>
  )
}

export default Login