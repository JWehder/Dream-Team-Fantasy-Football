import React from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"
import '../index.css'

function MyTeam({ myTeam, team, isLoggedIn }) {
  
    const positions = Object.keys(myTeam)
    
  
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            <div className="myTeamHeader">
                {team.teamLogo === "" ? "" : <img className= "teamLogo" src= {team.teamLogo} alt= "team logo" />}
                {team.teamName === "" ? "" : <h2>{team.cityName}, {team.teamName}</h2>}
            </div>
            <PlayersTable positions= {positions} myTeam={myTeam} />
        </div>
        
    )
}

export default MyTeam;