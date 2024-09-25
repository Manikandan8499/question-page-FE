import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";



const AppRoutes = () =>{

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>}>Home</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/register" element={<Register />}>Register</Route>
        </Routes>
        </BrowserRouter>
        </>
    )
};

export default AppRoutes;