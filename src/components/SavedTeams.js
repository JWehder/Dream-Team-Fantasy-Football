import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom"

function SavedTeams({ isLoggedIn }) {

    const [savedTeams, setSavedTeams] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then((teams) => teams.map((teamObj) => {
            const teamKeys = Object.keys(teamObj)
            let teamName = teamKeys[0]
            setSavedTeams([
                ...savedTeams,
                {
                    id: teamObj.id,
                    myPlayers: teamObj["myPlayers"],
                    teamName: teamName
                }
            ])
        }))
    }, []); 

    const savedTeamsToDisplay = savedTeams.map((savedTeam) => {
        return <li key= {savedTeam.id}>{savedTeam.teamName}</li>
    })


    if (!isLoggedIn) return <Redirect to="/login" />
    return (
        <div>
            <h1>creating functionality...</h1>
            <ul>
                {savedTeamsToDisplay}
            </ul>
        </div>
    )
}

export default SavedTeams;