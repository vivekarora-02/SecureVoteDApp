import React,{useState,useEffect} from 'react';
import '../css/createElection.css';
import Sidebar from './Sidebar';
import {useNavigate,useParams} from "react-router-dom";
import fireDb from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState={
  type:"",
  organiser:"",
  startDate:"",
  endDate:"",
  startTime:"",
  endTime:"",
};

function CreateElection() {

  const [state,setState]=useState(initialState);
  const [data, setData] = useState({});

  const { type,organiser,startDate,endDate,startTime,endTime} = state;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (!type || !organiser || !startDate || !startTime || !endDate || !endTime ) {
          // alert("Please provide value in each input field")
          toast.error('Provide each field', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          
      }
      else {
          fireDb.child("elections").push(state, (err) => {
              if (err) {
                  alert(err);
              }
              else {
                  // alert("Data Added Successfully");
                  toast.success('Data Added Successfully!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
              }
          });
          // setTimeout(() => history.push("/"), 500);
          setTimeout(() => navigate('/admin/election-details'), 500);
      }
  };
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
  };

  return (
    <>
  <Sidebar title="Admin"/>
  <div className="create-election">
  <div className="container-registration">
    <div className="title">Create New Election</div>
    <br />
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Type</span>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Enter the type of Election"
              required=""
              onChange={handleInputChange}
              value={type}
            />
          </div>
          <div className="input-box">
            <span className="details">Organiser</span>
            <input
              type="text"
              placeholder="Enter organiser's details"
              required=""
              onChange={handleInputChange}
              value={organiser}
              id="organiser"
              name="organiser"
            />
          </div>
          <div className="input-box">
            <span className="details">Start Date</span>
            <input type="date" placeholder="Enter the start date" required="" onChange={handleInputChange}
              value={startDate}
              id="startDate"
              name="startDate"/>
          </div>
          <div className="input-box">
            <span className="details">End Date</span>
            <input type="date" placeholder="Enter the end date" required="" onChange={handleInputChange}
              value={endDate}
              id="endDate"
              name="endDate"/>
          </div>
          <div className="input-box">
            <span className="details">Start Time</span>
            <input type="time" placeholder="Enter the start time" required="" onChange={handleInputChange}
              value={startTime}
              id="startTime"
              name="startTime"/>
          </div>
          <div className="input-box">
            <span className="details">End Time</span>
            <input type="time" placeholder="Enter the end time" required="" onChange={handleInputChange}
              value={endTime}
              id="endTime"
              name="endTime"/>
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Create Election" value="Create Election" />
        </div>
      </form>
    </div>
  </div>
<ToastContainer/>
</div>
</>

  )
}

export default CreateElection
