import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";


function RoutesSys () {


  return(
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="home" element={<HomePage/>}/>
    </Routes>
  )
}

export default RoutesSys;