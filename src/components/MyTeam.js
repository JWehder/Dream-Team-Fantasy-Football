import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"

function MyTeam({ team, isLoggedIn }) {
    const [myTeam, setMyTeam] = useState({
        QB: {},
        RB: {},
        WR: {},
        TE: {},
        K: {},
        DEF: {},
    })
  
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