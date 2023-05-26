import React, { useLayoutEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/pages/DashBoardPage";
import ProtectedRoutes from "../ProtectedRoutes";
import { Navbar } from '../../modules/compon/Navbar/Navbar';


function DashboardRoutes() {


    return (
        <Routes>

            <Route element={<ProtectedRoutes />}>
                {/* <Route exact path={"/" } element={<Blank />} /> */}
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                <Route path='/dashboard' element={<Navbar />} />

            </Route>
        </Routes>
    );
}

export default DashboardRoutes;
