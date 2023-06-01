import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import TopBar from "../modules/compon/topBar";
import { Navbar } from "../modules/compon/Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { draerState } from '../redux/features/drawer'



function ProtectedRoutes({ component: Component, ...rest }) {
  // let checkAuth = localStorage.getItem("token") ? true : false;


  const count = useSelector((state) => state.drawerState.value)
  console.log("------------------",count);

  return true ? 
  <><Navbar /><div
      style={{ paddingLeft: count === true? "250px" : "100px" , marginTop: "40px"}}
    >


      <Outlet />

    </div></> : <Navigate to='/login' />
}

export default ProtectedRoutes;
