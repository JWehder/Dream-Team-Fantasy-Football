import React from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"
import '../index.css'

function MyTeam({ onSaveTeam, myTeam, team, isLoggedIn }) {
  
    const positions = Object.keys(myTeam)
    
  
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            <div className="myTeamHeader">
                {team.teamLogo === "" ? "" : <img className= "teamLogo" src= {team.teamLogo} alt= "team logo" />}
                {team.teamName === "" ? "Please Create A Team Before Adding Players" : <h2>{team.cityName}, {team.teamName}</h2>}
                <button 
                className= "saveTeamButton" 
                onClick={onSaveTeam}
                value= "Submit"
                >
                    Save Team
                </button>

            </div>
            <PlayersTable positions= {positions} myTeam={myTeam} />
        </div>
        
    )
}

export default MyTeam;