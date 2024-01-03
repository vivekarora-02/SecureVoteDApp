import React from 'react';
import '../css/prediction.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import $ from 'jquery'; 

function WinningPrediction() {

  // $(function(){
  //   $('table').tablesorter(); 
  // });

  return (
    <>
   <SidebarUser/>
  <div className="win-prediction">
  <main>
  <section id="skills" className="toad-fullscreen">
  <h1>Winning Prediction</h1>
    {/* <article className="skills">
      <div className="t-6">
        <p>
          Party-1
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-2
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-3
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-4
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-5
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-6
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-7
          <span />
          <span className="skills" />
        </p>
      </div>
      <br />
      <div className="t-6">
        <p>
        Party-8
          <span />
          <span className="skills" />
        </p>
      </div>
    </article> */}
    <div class="igFrameBar">
  <div class="igData igData1"></div>
  <div class="igData igData2"></div>
  <div class="igData igData3"></div>
  <div class="igData igData4"></div>
  <div class="igData igData5"></div>
  <div class="igData igData6"></div>
  <div class="igData igData7"></div>
  <div class="igData igData8"></div>
  <div class="igData igData9"></div>
  <div class="igData igData10"></div>
</div>
  </section>
</main>
  </div>


</>

  )
}

export default WinningPrediction
