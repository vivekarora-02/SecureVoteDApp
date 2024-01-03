import React from 'react'

import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

function SidebarUser() {

    function sidebar_function() {
        const navBar = document.querySelector("nav"),
          menuBtns = document.querySelectorAll(".menu-icon"),
          overlay = document.querySelector(".overlay");
    
        menuBtns.forEach((menuBtn) => {
          menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
          });
        });
    
        // overlay.addEventListener("click", () => {
        //   navBar.classList.remove("open");
        // });
        
      }
    
      function sidebar_function2() {
        const navBar = document.querySelector("nav"),
          menuBtns = document.querySelectorAll(".menu-icon"),
          overlay = document.querySelector(".overlay");
    
        menuBtns.forEach((menuBtn) => {
          menuBtn.addEventListener("click", () => {
            navBar.classList.remove("open");
          });
        });
    
        // overlay.addEventListener("click", () => {
        //   navBar.classList.remove("open");
        // });
        
      }
    

  return (
    <>
    <div className='SidebarUser'>
    <nav>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={sidebar_function} />
          <span className="logo-name">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"#3C4250",fontWeight:"700"}}>Online Voting &nbsp;&nbsp;</span><span style={{color:"#6666FF",fontWeight:"700"}}>( User Portal )</span>
          </span>
        </div>
        <div className="sidebar">
          <div className="logo">
              <i className="bx bx-menu menu-icon" style={{color:"white"}} onClick={sidebar_function2}/>

            <span className="logo-name" style={{color:"white"}}>User Portal</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
              <Link to="/user/dashboard" className="nav-link"><i className="bx bx-home-alt icon" style={{color:"#fcfcfcd4"}} />
                  <span className="link" style={{color:"#fcfcfcd4"}}>Dashboard</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/register-for-vote" className='nav-link'><i className='bx bxs-message-rounded-add icon' style={{color:"#fcfcfcd4"}} />
                  <span className="link" style={{color:"#fcfcfcd4"}}>Register For Vote</span></Link>
                
              </li>
              <li className="list">
              <Link to="/user/elections" className="nav-link"><i className='bx bxs-upvote icon' style={{color:"#fcfcfcd4"}} />
                  <span className="link" style={{color:"#fcfcfcd4"}}>Cast Your Vote</span></Link>
                
              </li>
              {/* <li className="list">
              <Link to="/user/winning-prediction" className="nav-link"><i className='bx bx-analyse icon' style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Winning Prediction</span></Link>
                
              </li> */}
              {/* <li className="list">
              <Link to="/user/results" className="nav-link"><i className='bx bxl-tailwind-css icon' style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Election Status</span></Link>
                
              </li> */}
              
            </ul>
            <div className="bottom-cotent">
              <li className="list">
              <Link to="/" className="nav-link"><i className="bx bx-log-out icon" style={{color:"white"}} />
                  <span className="link" style={{color:"white"}}>Logout</span></Link>
                
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className="overlay" onClick={sidebar_function()}/>
    </div>
    </>
  )
}

export default SidebarUser