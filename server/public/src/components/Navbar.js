import { Link } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";


const Navbar = () => {
  const {logout} = useAuthCalls();
  return (
    <nav className="flex justify-between px-5">
      <h4>Ich bin Logo</h4>
      <div className="flex justify-evenly gap-3">
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <h4 onClick={logout}>Logout</h4>
      </div>

    </nav>
  )
}

export default Navbar