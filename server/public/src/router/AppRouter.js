import {BrowserRouter, Routes, Route} from "react-router-dom";

import PrivateRouter from "./PrivateRouter";

import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Tasks from "../pages/Tasks";
import Home from "../pages/Home";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyEmailWarning from "../pages/VerifyEmailWarning";
import ForgotPassword from "../pages/ForgotPassword";

import Navbar from "../components/Navbar";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/user/verify-email" element={<VerifyEmail/>}/>
                <Route path="/verify-email-warning" element={<VerifyEmailWarning/>}/>
                <Route path="/tasks" element={<PrivateRouter/>}>
                    <Route path="" element={<Tasks/>}/>
                </Route>
                <Route path="/change-password" element={<PrivateRouter/>}>
                    <Route path="" element={<ChangePassword/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;