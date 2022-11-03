import React from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"

function MyTeam({ myTeam, team, isLoggedIn }) {
  
    const positions = Object.keys(myTeam)
    
  
    if (!isLoggedIn) return <Redirect to="/login" />
    if ()
  
    return (
        <div>
            {team.cityName || team.teamName === "" ? "" : <h2>{team.cityName}, {team.teamName}</h2>}
            <PlayersTable positions= {positions} myTeam={myTeam} />
        </div>
        
    )
}

export default MyTeam;