import React, { useContext } from "react";
import { Redirect } from "react-router-dom"
import PlayersLiItem from "./PlayersLiItems"
import { TeamContext } from "../context/myTeam";

function SavedTeams({ isLoggedIn }) {

    const { savedTeams } = useContext(TeamContext)


    const savedTeamsToDisplay = savedTeams.map((savedTeam) => {
        return (
            <div>
                <h4>{savedTeam.teamName}</h4>
            <ul>
                <PlayersLiItem players={savedTeam.myPlayers} />
            </ul>
            </div>
        )
    })


    if (!isLoggedIn) return <Redirect to="/login" />
    return (
        <div className="savedTeams">
            <h1>Saved Teams</h1>
            <hr></hr>
            <ul className="savedList">
                {savedTeamsToDisplay}
            </ul>
        </div>
    )
}

export default SavedTeams;