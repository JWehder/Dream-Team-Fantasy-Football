import React from "react";
import { Redirect } from "react-router-dom"
import PlayerCard from "./PlayerCard";

function Home({ players, header, isLoggedIn }) {

    const playersToDisplay = players.map((player) => {
        return <PlayerCard player={player} />
    })

    if (!isLoggedIn) return <Redirect to="/login" />
    return (
        <div>
            <h1>Welcome, {header}</h1>
            {playersToDisplay}
        </div>
    )
}

export default Home;