import { useState } from "react";
import useUserCalls from "../hooks/useUserCalls";


const ChangePassword = () => {
  const {updatePassword} = useUserCalls();
  const [userInfo, setUserInfo] = useState({oldPassword:'', newPassword:''})

  const handleChange = (e)=>{
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    updatePassword(userInfo);
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-h-[screen-10rem]">
      <section>
        <div className="flex gap-3">
      <label htmlFor="oldPassword">oldPassword</label>
      <input type="password" name="oldPassword" id="oldPassword" required value={userInfo.email} onChange={handleChange}/>
      </div>
      <div className="flex gap-3">
      <label htmlFor="newPassword">newPassword</label>
      <input type="password" name="newPassword" id="newPassword" required value={userInfo.password} onChange={handleChange}/>
      </div>
      </section>
      <button type="submit" className="btn btn-neutral">Change Password</button>
    </form>
  )
}

export default ChangePassword;