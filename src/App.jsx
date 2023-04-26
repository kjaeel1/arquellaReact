import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './modules/pages/register/Register'
import { Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './modules/pages/login/Login'
import { ForgotPassword } from './modules/pages/ForgotPassword'
import Protected from './modules/pages/route/Protected'
import DashBoardPage from './modules/pages/DashBoardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Protected Components={Login}/>} />
          <Route path='/dashBoardPage' element={<Protected Components={DashBoardPage}/>} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>

      </BrowserRouter>
      {/* <Registration/> */}
      {/* <ForgotPassword/> */}
    </>
  )
}

export default App
