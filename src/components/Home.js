import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import PlayerCard from "./PlayerCard";
import Filter from "./Filter"

function Home({ players, header, isLoggedIn }) {

    const [positionCategory, setPositionCategory] = useState("All")

    function handleCategoryChange(event) {
        setPositionCategory(event.target.value)
    }

    const filteredPlayers = players.filter((player) => {
        if (positionCategory === "All") {
            return true
        } else {
            return player.position === positionCategory
        }
    })

    const playersToDisplay = filteredPlayers.map((player) => {
            return <PlayerCard player={player} />
        })

    if (!isLoggedIn) return <Redirect to="/login" />
    return (
        <div>
            <h1>Welcome, {header}</h1>
            <Filter onCategoryChange={handleCategoryChange}/>
            {playersToDisplay}
        </div>
    )   
}

export default Home;