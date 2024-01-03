import React,{useState} from 'react';
import '../css/addCandidate1.css';
import Sidebar from './Sidebar';

function check() {
    const [user,setUser]=useState({
        name:"",party:"",experience:"",url:"",region:"",district:"",age:""
    });

    const handleInputs=(e)=>{
        // console.log(e);
        ans=e.target.ans;
        value=e.target.value;
    }

    setUser({...user,[name]:value})

  return (
    <>
        <Sidebar title="Admin"/>
  <div className="add-candidate">
  <div className="container-registration">
    <div className="title">ADD CANDIDATE</div>
    <br />
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input
              type="text"
              ans="name"
              placeholder="Enter candidate's name"
              required=""
              value={user.name}
              onChange={handleInputs}
            />
          </div>
          <div className="input-box">
            <span className="details">Party</span>
            <input
              type="text"
              ans="party"
              placeholder="Enter political party"
              required=""
              value={user.party}
              onChange={handleInputs}
            />
          </div>
          
          <div className="input-box">
            <span className="details">Avatar URL</span>
            <input
              type="text"
              ans="url"
              placeholder="Enter candidate's image url"
              required=""
              value={user.url}
              onChange={handleInputs}
            />
          </div>
          
          <div className="input-box">
            <span className="details">Candidate's Experience</span>
            <input
              type="text"
              ans="experience"
              placeholder="Enter candidate's experience"
              required=""
              value={user.experience}
              onChange={handleInputs}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's Region</span>
            <input
              type="text"
              ans="region"
              placeholder="Enter candidate's region"
              required=""
              value={user.region}
              onChange={handleInputs}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's District</span>
            <input
              type="text"
              ans="district"
              placeholder="Enter candidate's district"
              required=""
              value={user.district}
              onChange={handleInputs}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's Age</span>
            <input
              type="number"
              ans="age"
              placeholder="Enter candidate's description"
              required=""
              value={user.age}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Add Candidate" value="Add Candidate"/>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default check