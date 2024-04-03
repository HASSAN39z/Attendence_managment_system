import React from 'react'
import { BrowserRouter as Router,Routes, Route,  } from "react-router-dom";
import { Dashbboard, LoginScreen } from './screens'
import SideBar from './screens/components/sidebar/SideBar';

function App() {
  return (
    <>
    <Router >
      <Routes >
        <Route exact path="/" Component={LoginScreen} />
        <Route path="/sidebar" Component={SideBar} />
        <Route path='/dashboard' Component={Dashbboard}/>
      </Routes>
    </Router>
    </>
  )
}

export default App