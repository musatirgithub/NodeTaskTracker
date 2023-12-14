import { Link } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";


const Navbar = () => {
  const {currentUser, role} = useSelector((state)=>state.auth)
  const {logout} = useAuthCalls();
  return (
    <nav className="flex justify-between px-5">
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