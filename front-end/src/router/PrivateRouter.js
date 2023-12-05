// import {useSelector} from "redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ()=>{
    // const {currentUser} = useSelector((state)=>state.auth);
    const currentUser = null;
    return currentUser ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRouter;