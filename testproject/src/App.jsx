import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Login from './comp/Login'
import Register from './comp/Register'
import Dashboard from "./comp/Dashboard";

const App=()=>{

  return (

    <Router>
      
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
         
        </Routes>
      
    </Router>
  )
}

export default App