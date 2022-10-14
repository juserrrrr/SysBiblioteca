import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";


function RoutesSys () {


  return(
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="home"/>
    </Routes>
  )
}

export default RoutesSys;