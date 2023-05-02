import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import TopBar from "../modules/compon/topBar";




function ProtectedRoutes({ component: Component, ...rest }) {
  // let checkAuth = localStorage.getItem("token") ? true : false;
  // console.log("------------------",localStorage.getItem("token"));

  return true ? 
  <div 
  // style={{padding: '40px 11% 0px 150px'}}
  >

    <TopBar/>
    <Outlet />
  
  </div> : <Navigate to='/login' />
}

export default ProtectedRoutes;
