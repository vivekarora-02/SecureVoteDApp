import React from 'react';
import './App.css';
// import Signup from './components/authentication/Signup';
// import Signup from './components/authentication/Signup';
import CoverPage from './components/CoverPage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
// import connect_button from './components/connect_button';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

import UserRegisterForm from './components/UserRegisterForm';
import UserVoting from './components/UserVoting';
import {Route,Routes} from 'react-router-dom';

import WinningPrediction from './components/WinningPrediction';

import UserElections from './components/UserElections';

import ElectionResults from './components/ElectionResults';

import AddCandidate from './components/AddCandidate';
import RemoveCandidate from './components/RemoveCandidate';
import CandidateDetails from './components/CandidateDetails';

import ElectionDetails from './components/ElectionDetails';
import CreateElection from './components/CreateElection';
// import LoginForm from './components/LoginForm';
import AnimatedButton from './components/button-animation/AnimatedButton';

function App() {

  return (
    <div className="">
        <Routes> 
          
          <Route exact path="/" element={<CoverPage/>} />
          <Route exact path="/admin-portal" element={<AdminLogin/>} />
          <Route exact path="/user-portal" element={<UserLogin/>} />
           <Route exact path="/user/dashboard" element={<UserDashboard/>}/> 
          <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route exact path='/admin/create-election' element={<CreateElection/>}/> 
          <Route exact path="/user/register-for-vote" element={<UserRegisterForm/>}/>
          <Route exact path='/admin/candidate-details' element={<CandidateDetails/>}/>
          <Route exact path='/user/results' element={<ElectionResults/>}/>
          <Route exact path='/admin/add-candidate' element={<AddCandidate/>}/>
          <Route exact path="/user/voting-area" element={<UserVoting/>}/>
          <Route exact path='/user/winning-prediction' element={<WinningPrediction/>}/>
          <Route exact path='/user/elections' element={<UserElections/>}/>
          <Route exact path='/admin/election-details' element={<ElectionDetails/>}/>
          <Route exact path='/admin/remove-candidate' element={<RemoveCandidate/>}/>
          {/* <Route exact path='/user/signup' element={<Signup/>}/> */}
          <Route exact path='/animatedButton' element={<AnimatedButton/>}/>
        </Routes> 
        {/* <LoginForm/> */}
      </div>
  );
}

export default App;
