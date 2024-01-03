import React from 'react';
import '../css/cover_page.css';
import shape from '../img/shape.png';
import logo from '../img/logo.png';
import person from '../img/person.jpg';
import {Link} from "react-router-dom";

function CoverPage() {
  return (
    <div>
      <main>
  <div className="big-wrapper light">
    <img src={shape} alt="" className="shape" />
    <header>
      <div className="container">
        <div className="logo" style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
          <h3>
          <Link to="/">Online Voting Portal</Link>
            {/* <a href="cover_page.html"></a> */}
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
            <h1>Future is here,</h1>
            <h1>Vote using Blockchain</h1>
          </div>
          <p className="text">
            Enjoy the most secured,transparent,efficient and immutable voting
            system decentralized using the Ethereum Framework.
          </p>
          <div className="cta">
            
            <Link to="/admin-portal" className='btn'>Admin Login</Link>
            &nbsp;
            <Link to="/user-portal" className='btn'>User Login</Link>
              
            
          </div>
        </div>
        <div className="right">
          <img src={person} alt="Person Image" className="person" />
        </div>
      </div>
    </div>
    <div className="bottom-area">
      <div className="container"></div>
    </div>
  </div>
</main>

    </div>
  )
}

export default CoverPage
