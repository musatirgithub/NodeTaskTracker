import { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const {forgotPassword} = useAuthCalls

    const handleChange= (e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        forgotPassword(email);
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <section>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />
        </section>
        <button type="submit">Send reset password Link</button>
    </form>
  )
}

export default ForgotPassword