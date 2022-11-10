import React from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"
import '../index.css'
import CreateTeam from "./CreateTeam";

function MyTeam({ onSaveTeam, myTeam, team, isLoggedIn, setTeamData }) {
  
    const positions = Object.keys(myTeam)
    
  
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            <div className="myTeamHeader">
                {team.teamLogo === "" ? "" : <img className= "teamLogo" src= {team.teamLogo} alt= "team logo" />}
                {team.teamName === "" ? "Please Create A Team Before Adding Players" : <h2>{team.cityName}, {team.teamName}</h2>}

            </div>
            <CreateTeam 
            isLoggedIn={isLoggedIn} 
            team={team}
            setTeam={setTeamData}
            onSaveTeam={onSaveTeam}
            />
            <PlayersTable positions= {positions} />
            
        </div>
        
    )
}

export default MyTeam;