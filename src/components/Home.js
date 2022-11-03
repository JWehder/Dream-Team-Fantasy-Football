import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import PlayerCard from "./PlayerCard";
import Filter from "./Filter"

function Home({ players, header, isLoggedIn }) {

    const [positionCategory, setPositionCategory] = useState("All")
    const [searchedPlayer, setSearchedPlayer] = useState("")

    function 

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
            <form>
                <input 
                type="text" 
                name="searchPlayer" 
                value={searchedPlayer}
                placeholder="Search for a player.."
                onChange={handleSearchChange}
                >
                </input>
            </form>
            {playersToDisplay}
        </div>
    )   
}

export default Home;