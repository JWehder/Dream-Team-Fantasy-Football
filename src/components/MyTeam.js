import React, { useContext } from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"
import '../index.css'
import CreateTeam from "./CreateTeam";
import { TeamContext } from "../context/myTeam";

function MyTeam({ isLoggedIn }) {

    const { myTeam, teamData } = useContext(TeamContext);
  
    const positions = Object.keys(myTeam)
    
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            <div className="myTeamHeader">
                {teamData.teamLogo === "" ? "" : <img className= "teamLogo" src= {teamData.teamLogo} alt= "team logo" />}
                {teamData.teamName === "" ? "Please Create A Team Before Adding Players" : <h2>{teamData.cityName}, {teamData.teamName}</h2>}

            </div>
            <CreateTeam />
            <PlayersTable positions= {positions} />
        </div>
    )
}

export default MyTeam;