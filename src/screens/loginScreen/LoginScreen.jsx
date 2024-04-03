import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../commons";
function LoginScreen() {
  return (
    <>
    <Navbar/>

      <div className="container">
        <div className="leftSide">
          <h1>
            Attendance <br />{" "}
            <span className="coloredText">for your School</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <form action="#" method="post">
          <div className="radio" id="userRole">
            <div className="student">
              <input type="radio" id="student" name="userRole" />
              <label htmlFor="student">Student</label>
            </div>
            <div className="Admin">
              <input type="radio" id="admin" name="userRole" />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
          <div className="inputs">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <br />
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id=""
              placeholder="Password"
              required
            />
            <br />
          </div>
          <div className="btns">
            <div className="cheakcbox">
              <input
                type="checkbox"
                // checked={rememberMe}
                // onChange={handleCheckboxChange}
              />
              <label>Remember me</label>
            </div>
            <Link to="/sidebar" type="submit" className="btnLogin">
              Sign in
            </Link>

            <a href="" className="frgtPass">
              Forgot password?
            </a>

            <span>
              Don't have an account?{" "}
              <a href="" className="regBtn">
                Register Here
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginScreen;
