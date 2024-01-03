import React from 'react'
import $ from 'jquery';
import ReactDOM from 'react-dom';
// import { click } from '@testing-library/user-event/dist/click';
import './AnimatedButton.css';

function AnimatedButton() {
    var wrapper = $("#button-wrapper");
    $(".submit").click(function () {
      if (wrapper.not(".checked")) {
        wrapper.addClass("checked");
        setTimeout(function () {
          wrapper.removeClass("checked");
        }, 8000);
      }
    });


  return (
    <>
        
  <div id="button-wrapper">
    <a className="submit" href="#">
      Submit
    </a>
    <div className="loader-wrapper">
      <span className="loader yellow" />
      <span className="loader pink" />
    </div>
    <span className="loader orange" />
    <div className="check-wrapper">
      <svg version="1.1" width="65px" height="38px" viewBox="0 0 64.5 37.4">
        <polyline className="check" points="5,13 21.8,32.4 59.5,5 " />
      </svg>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    {" "}
    <defs>
      {" "}
      <filter id="goo">
        {" "}
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation={10}
          result="blur"
        />{" "}
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />{" "}
        <feBlend in="SourceGraphic" in2="goo" />{" "}
      </filter>
    </defs>
  </svg>
</>

    
  )
}

export default AnimatedButton