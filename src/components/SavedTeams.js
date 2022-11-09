import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom"
import PlayersLiItem from "./PlayersLiItems"

function SavedTeams({ isLoggedIn, savedTeams }) {

    useEffect() => () 


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