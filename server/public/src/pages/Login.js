import { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";
import { Link } from "react-router-dom";


const Login = () => {
  const {login} = useAuthCalls();
  const [userInfo, setUserInfo] = useState({email:'', password:''})

  const handleChange = (e)=>{
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    login(userInfo);
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-h-[screen-10rem]">
      <section>
        <div className="flex gap-3">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required value={userInfo.email} onChange={handleChange}/>
      </div>
      <div className="flex gap-3">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required value={userInfo.password} onChange={handleChange}/>
      </div>
      </section>
      <h4>
        <Link to='/forgot-password' className="btn btn-link">Forgot Password?</Link>
      </h4>
      <button type="submit" className="btn btn-neutral">Submit</button>
    </form>
  )
}

export default Login