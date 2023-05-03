




import React from 'react';
// import Layout from "./components/layout/AppLayout";

import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";

import Routess from "./Routes/Routess";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



const App = () => {

    

  return (
    
        <Router>             
            <AuthRoutes /> 
  
       
                <Routess />
     
            
        </Router>
 
);
}

export default App;



