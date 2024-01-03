import React from "react";
import "../css/adminLogin2.css";
import "../css/adminLogin1.css";
import shape from "../img/shape.png";
import logo from "../img/logo.jpg";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import LoginFormAdmin from "./LoginFormAdmin";

function AdminLogin() {
  return (
    <main>
      <div className="big-wrapper light">
        <img src={shape} alt="" className="shape" />
        <header>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Logo" style={{ borderRadius: "50%" }} />
              <h3>
                <Link to="/">Online Voting Portal</Link>
                {/* <a href="../cover_page.html">Online Voting Portal</a> */}
              </h3>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#" />
                </li>
                <li>
                  <a href="#" />
                </li>
                <li>
                  <a href="#" />
                </li>
                <li>
                  <a href="#" />
                </li>
              </ul>
            </div>
            <div className="overlay" />
            <div className="hamburger-menu">
              <div className="bar" />
            </div>
          </div>
        </header>
        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="big-title">
                <h1>Admin Login Portal</h1>
              </div>
              <p className="text">
                Enjoy the most secured, transparent, efficient and immutable
                portal for conducting elections.
              </p>
              {/* <div class="cta">
          <a href="admin_portal.html" class="btn">Admin Login</a>
          <a href="user_portal.html" class="btn">User Login</a>
        </div> */}
            </div>
            <div className="right person">
              <div className="login-wrap">
                <div className="login-html">
                  <LoginFormAdmin />
                </div>
              </div>
            </div>
            <div className="bottom-area">
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminLogin;
