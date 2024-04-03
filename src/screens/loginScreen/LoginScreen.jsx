import React from "react";
import "./style.css";
import { Navbar } from "../commons";
function LoginScreen() {
  return (
    <div className="container">
      <Navbar search={true} notificationAndprofile={true}/>
      <h1 className="h1">Login</h1>
    </div>
  );
}

export default LoginScreen;
