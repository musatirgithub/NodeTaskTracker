import { Link } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";


const Navbar = () => {
  const {currentUser, role} = useSelector((state)=>state.auth)
  const {logout} = useAuthCalls();
  return (
    <nav className="flex justify-between items-center h-[4rem] px-5  bg-[#D9C6A7] text-[#0D1732] text-[1rem] font-semibold">
      <div className="flex gap-3">
      <h4>Ich bin Logo</h4>
      <h4>{currentUser?`Welcome ${currentUser}`:'Welcome visitor'}</h4>
      </div>
      <div className="flex justify-evenly gap-3">
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <h4 onClick={logout}>Logout</h4>
      </div>

    </nav>
  )
}

export default Navbar