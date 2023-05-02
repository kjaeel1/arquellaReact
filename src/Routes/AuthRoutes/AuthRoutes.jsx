
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../../modules/pages/login/Login'
import Registration from '../../modules/pages/register/Register'
  

function AuthRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path='/login' element={< Login />}/>
        <Route exact path='/Registration' element={< Registration />} />
      </Routes>
    </div>
  )
}

export default AuthRoutes