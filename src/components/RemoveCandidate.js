import React,{useEffect,useState} from 'react'
import '../css/removeCandidate.css';
import '../css/voting.css';
import Remove from './Remove';
import Sidebar from './Sidebar';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import fireDb from "./firebase";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RemoveCandidate() {

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

const successMessage=async(e)=>{
  e.preventDefault();
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Registered Successfully for Voting!!!", {
        icon: "success",
      });
    } else {
      swal("Your data is saved!");
    }
  });
}



  return (
    <>
  
  <Sidebar title="Admin"/>
  <div className="user-voting">
  <h1>Remove Candidate</h1>
  <section className="profile-cards">
  {
    Object.keys(data).map((id,index)=>{
      return(
        <Remove candidateName={data[id].name} imgUrl={data[id].url} party={data[id].party} experience={data[id].experience} age={data[id].age} state={data[id].region} district={data[id].district} uid={id} >
          
          </Remove>
        
      )
    })
  }
  </section>
  </div>
  <ToastContainer/>
</>

  )
}

export default RemoveCandidate