import React from "react";
import { Redirect } from "react-router-dom"
import PlayersTable from "./PlayersTable"
import { Button } from 'semantic-ui-react'
import '../index.css'

function MyTeam({ onSaveTeam, myTeam, team, isLoggedIn }) {
  
    const positions = Object.keys(myTeam)
    
  
    if (!isLoggedIn) return <Redirect to="/login" />
  
    return (
        <div>
            <div className="myTeamHeader">
                {team.teamLogo === "" ? "" : <img className= "teamLogo" src= {team.teamLogo} alt= "team logo" />}
                {team.teamName === "" ? "Please Create A Team Before Adding Players" : <h2>{team.cityName}, {team.teamName}</h2>}
                <Button 
                className= "saveTeamButton" 
                positive
                onClick={onSaveTeam}
                >
                    Save Team
                </Button>

            </div>
            <PlayersTable positions= {positions} myTeam={myTeam} />
        </div>
        
    )
}

export default MyTeam;