// import { id } from 'ethers/lib/utils';
import React,{useEffect,useState} from 'react'
import '../css/voting.css';
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import fireDb from "./firebase";


function Remove(props) {
    const uid=props.uid
    const [data, setData] = useState({});
    

    useEffect(() => {
        fireDb.child("voting_system").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
  
        });
  
        return () => {
            setData({});
        };
    }, []);

    const onDelete = (uid) => {
        if (
            window.confirm("Are You Sure?")
        ) {
            fireDb.child(`voting_system/${uid}`).remove((err) => {
                if (err) {
                    toast.error(err);
                }
                else {
                    toast.success("Deleted Successfully!!");
                }
            });
        }
      };

      

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
        <form >
        <button className="stat upvoting" style={{color:"white",backgroundColor:"#161623"}} type="submit" onClick={() => onDelete(uid)}>
        
        ❌Delete
          </button>
          </form>
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
<ToastContainer/>
    </>
  )
}

export default Remove