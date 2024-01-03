import React from "react";
import "../css/sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar(props) {
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
      <nav>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={sidebar_function} />
          <span className="logo-name">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"#3C4250",fontWeight:"700"}}>Online Voting &nbsp;&nbsp;</span><span style={{color:"#6666FF",fontWeight:"700"}}>( Admin Portal )</span>
          </span>
        </div>
        <div className="sidebar">
          <div className="logo">
              <i className="bx bx-menu menu-icon" style={{color:"white"}} onClick={sidebar_function2}/>

            <span className="logo-name" style={{color:"white"}}>{props.title} Portal</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists" >
              <li className="list">
              <Link to="/admin/dashboard" className="nav-link"><i className="bx bx-home-alt icon" style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Dashboard</span></Link>
              </li>
              <li className="list">
              <Link to="/admin/create-election" className="nav-link">
              <i className="bx bx-add-to-queue icon" style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Create Election</span>
              </Link>
              </li>
              <li className="list">
              <Link to="/admin/election-details" className="nav-link">
              <i className="bx bx-message-detail icon" style={{color:"#fcfcfcd4"}} />
                  <span className="link" style={{color:"#fcfcfcd4"}}>Election Details</span>
              </Link>
               
              </li>
              <li className="list">
              <Link to="/admin/candidate-details" className="nav-link">
              <i className="bx bx-message-detail icon" style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Candidate details</span>
              </Link>
              </li>
              <li className="list">
              <Link to="/admin/add-candidate" className="nav-link"><i className="bx bx-message-square-add icon"style={{color:"#fcfcfcd4"}} />
                  <span className="link" style={{color:"#fcfcfcd4"}}>Add Candidate</span></Link>
                
              </li>
              <li className="list">
              <Link to="/admin/remove-candidate" className="nav-link">
              <i className="bx bx-message-square-minus icon" style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Remove Candidate</span>
              </Link>
               
              </li>

              <li className="list">
              <Link to="/user/results" className="nav-link"><i className='bx bxl-tailwind-css icon' style={{color:"#fcfcfcd4"}}/>
                  <span className="link" style={{color:"#fcfcfcd4"}}>Election Status</span></Link>
                
              </li>

            </ul>
            <div className="bottom-cotent">
              <li className="list">
              <Link to="/" className="nav-link">
              <i className="bx bx-log-out icon" style={{color:"white"}}/>
                  <span className="link" style={{color:"white",fontSize:"50"}}>Logout</span>
              </Link>
                
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className="overlay" onClick={sidebar_function()}/>
    </>
  );
}

export default Sidebar;
