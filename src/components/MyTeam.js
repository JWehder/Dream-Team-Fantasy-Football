import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"

function MyTeam({ myTeam, team, isLoggedIn }) {
  
    const positions = Object.keys(myTeam)
  
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            {team.cityName || team.teamName === "" ? "" : <h2>{team.cityName}, {team.teamName}</h2>}
            <PlayersTable positions= {positions} team={myTeam} />
        </div>
        
    )
}

export default MyTeam;