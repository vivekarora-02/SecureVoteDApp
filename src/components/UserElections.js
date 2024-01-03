import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../css/user_elections.css';
import UserElectionsData from './UserElectionData';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import {ethers} from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from "./firebase";

function UserElections(props) {

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

  const [walletAddress,setWalletAddress]=useState('');
  const [connect_wallet,set_connect_wallet]=useState("Connect To Ethereum Account");


  async function requestAccount(){
    console.log('Requesting account...');

    if(window.ethereum){
      console.log('detected');

      try{
        const accounts=await window.ethereum.request({
          method:"eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
      }
      catch(error){
        console.log('Error Connecting..');
      }
    }
    else{
      alert('Metamask Not Detected');
    }

  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      set_connect_wallet("Connected")
      // const address=walletAddress;
      toast.success('Metamask Connected Successfully!!', {
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
  }

  return (
    <>
    <SidebarUser/>
  <div className="user-elections">
    <button class="btn btn--accept" onClick={connectWallet}
    >{connect_wallet}</button>
    <h3 className='wallet'>{walletAddress}</h3>
  <h1>Ongoing Elections</h1>
  <div className="dashboard-cards">
    <div className="card-container">
      {
        Object.keys(data).map((id,index)=>{
          return(
            <UserElectionsData id={index+1} type={data[id].type} organizer={data[id].organiser} startDate={data[id].startDate} endDate={data[id].endDate} startTime={data[id].startTime} endTime={data[id].endTime}
            
            />
            
          )
        })
      }
    </div>
  </div>
  </div>
  <ToastContainer/>
</>

  )
}

export default UserElections
// export {address};