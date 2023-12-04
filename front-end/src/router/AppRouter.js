import {BrowserRouter, Routes, Route} from "react-router-dom";

import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Tasks from "../pages/Tasks";

import Navbar from "../components/Navbar";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/tasks" element={<PrivateRouter/>}>
                    <Route path="" element={<Tasks/>}/>
                </Route>
                <Route path="/tasks" element={<PrivateRouter/>}>
                    <Route path="" element={<ChangePassword/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
