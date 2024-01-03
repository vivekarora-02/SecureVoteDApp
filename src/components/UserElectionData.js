import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/user_elections.css";

function UserElectionsData(props) {
  // Get the voting status from local storage or default to false
  const storedVotingStatus = localStorage.getItem("hasVoted");
  const [hasVoted, setHasVoted] = useState(storedVotingStatus === "true");

  useEffect(() => {
    // Save the voting status to local storage
    localStorage.setItem("hasVoted", hasVoted);
  }, [hasVoted]);

  const handleVoteClick = () => {
    // Perform logic to check whether the user has already voted
    // For demonstration purposes, I'm setting hasVoted to true
    setHasVoted(true);
  };

  return (
    <div>
      <>
        <div className="card-container">
          <div className="card">
            <div className="content">
              <h2>{props.id}</h2>
              <h3>Election</h3>
              <p>
                <ul>
                  <li>Type : {props.type}</li>
                  <li>Organizer : {props.organizer}</li>
                  <li>Start Date : {props.startDate}</li>
                  <li>End Date : {props.endDate}</li>
                  <li>Start Time : {props.startTime}</li>
                  <li>End Time : {props.endTime}</li>
                </ul>
              </p>
              {hasVoted ? (
                <p>You have already cast your vote</p>
              ) : (
                <Link to="/user/voting-area" onClick={handleVoteClick}>
                  Cast Your Vote
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default UserElectionsData;
