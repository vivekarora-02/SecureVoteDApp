import React,{useEffect,useState} from 'react';
import '../css/voting.css';
import Sidebar from './Sidebar';
// import Candidates from './Candidates';
// import Records from './candidates.json';
import fireDb from "./firebase";
import AdminCandidates from './AdminCandidates';

function CandidateDetails() {

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

  return (
    <>
  <Sidebar title="Admin"/>
  <div className="candidate-details">
  <h1>Candidate Details</h1>
 
  <section className="profile-cards">
  {
    Object.keys(data).map((id,index)=>{
      return(
        <AdminCandidates candidateName={data[id].name} imgUrl={data[id].url} party={data[id].party}  state={data[id].region} district={data[id].district}/>
      )
    })
  }
  
  </section>
  </div>
</>

  )
}

export default CandidateDetails