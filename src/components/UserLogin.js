import React from 'react';
import '../css/login.css';
import '../css/user_login.css';
import shape from '../img/shape.png';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login';
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';

function UserLogin() {
  return (
    <>
        <main>
  <div className="big-wrapper light">
    <img src={shape} alt="" className="shape" />
    <header>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
          <h3>
          <Link to="/">Online Voting Portal</Link>
            {/* <a href="../cover_page.html"></a> */}
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
            <h1>User Login Portal</h1>
          </div>
          <p className="text">
            ''The vote is precious. It is the most powerful non-violent tool we
            have in a democratic society, and we must use it.''
          </p>
         
        </div>
        <div className="right person">
          <div className="login-wrap">
            <div className="login-html">
            <LoginForm title="User" />
               
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


    </>
  );
}

export default UserLogin;