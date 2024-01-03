import React,{useEffect,useState} from 'react';
import '../css/election_details.css';
import Elections from './Elections';
import Sidebar from './Sidebar';
import fireDb from "./firebase";

function ElectionDetails() {

  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("elections").on("value", (snapshot) => {
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

  return (
    <>
    <Sidebar title="Admin"/>
    <div className="election-details">
  <h1>Election Details</h1>
  <div className="dashboard-cards">
    <div className="card-container">
    {
      Object.keys(data).map((id,index)=>{
        return(
          <Elections id={index+1} type={data[id].type} organizer={data[id].organiser} startDate={data[id].startDate} endDate={data[id].endDate} startTime={data[id].startTime} endTime={data[id].endTime}/>
          
        )
      })
    }
      </div>
      </div>
      </div>

    

    </>
  )
}

export default ElectionDetails
