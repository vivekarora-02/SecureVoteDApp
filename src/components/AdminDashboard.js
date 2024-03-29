import React from "react";
import "../css/adminDashboard2.css";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <>
      <Sidebar title="Admin" />
      <h1 className="heading">Admin Dashboard</h1>
      <div id="main-version">
        <div id="version">ADMIN INSTRUCTIONS</div>
        <div>
          <h1>Admin Dashboard</h1>
          <div style={{ textAlign: "justify" }}>
            <p>
              An electoral system or voting system is a set of rules that
              determine how elections and referendums are conducted and how
              their results are determined. Electoral systems are used in
              politics to elect governments, while non-political elections may
              take place in business, non-profit organisations and informal
              organisations. These rules govern all aspects of the voting
              process: when elections occur, who is allowed to vote, who can
              stand as a candidate, how ballots are marked and cast, how the
              ballots are counted, how votes translate into the election
              outcome, limits on campaign spending, and other factors that can
              affect the result. Political electoral systems are defined by
              constitutions and electoral laws, are typically conducted by
              election commissions, and can use multiple types of elections for
              different offices.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Proportional_voting_systems.svg/1920px-Proportional_voting_systems.svg.png"
              style={{ width: "100%" }}
            />
            <p>
              Some electoral systems elect a single winner to a unique position,
              such as prime minister, president or governor, while others elect
              multiple winners, such as members of parliament or boards of
              directors. When electing a legislature, voters may be divided into
              constituencies with one or more representatives, and may vote
              directly for individual candidates or for a list of candidates put
              forward by a political party or alliance. There are many
              variations in electoral systems, with the most common systems
              being first-past-the-post voting, block voting, the two-round
              (runoff) system, proportional representation and ranked voting.
              Some electoral systems, such as mixed systems, attempt to combine
              the benefits of non-proportional and proportional systems.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Electoral_systems_map.svg"
              style={{ width: "100%" }}
            />
            <p>
              The study of formally defined electoral methods is called social
              choice theory or voting theory, and this study can take place
              within the field of political science, economics, or mathematics,
              and specifically within the subfields of game theory and mechanism
              design. Impossibility proofs such as Arrow's impossibility theorem
              demonstrate that when voters have three or more alternatives, no
              preferential voting system can guarantee the race between two
              candidates remains unaffected when an irrelevant candidate
              participates or drops out of the election.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
