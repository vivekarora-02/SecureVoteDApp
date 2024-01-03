import React from 'react';
import '../css/voting.css';

function AdminCandidates(props) {
  return (
    <>
    <div className="profile-card-1">
      <div className="img">
        <img src={props.imgUrl} />
      </div>
      <a className="view-more" href="">
        {/* <i className="fa fa-plus-circle" aria-hidden="true" /> */}
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">{props.candidateName}</div><br />
        <div className="description">
          {props.description}<a href="">{props.party}</a>
        </div>
        <div className="line" />
        <div className="stats">
        
        </div>
      </div>

    </div>

    <div className="profile-card-2 profile-card-1">
    <div className="name" style={{marginTop:"50px",fontSize:"1.40rem"}}>{props.candidateName}</div>
    <br />
    <div className="description"style={{marginTop:"20px",fontSize:"1rem"}}>
          <ul>
           
            <li>Party : {props.party}</li>
            <br />
            <li>State : {props.state}</li>
            <br />
            <li>District : {props.district}</li>
          </ul>
        </div>
    </div>

    </>
  )
}

export default AdminCandidates