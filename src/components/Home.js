import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom"
import PlayerCard from "./PlayerCard";
import Filter from "./Filter"
import '../index.css'
import { PlayerContext } from "../context/players";


function Home({ header, isLoggedIn }) {
    const [positionCategory, setPositionCategory] = useState("All")
    const [searchedPlayer, setSearchedPlayer] = useState("")

    const { allPlayers } = useContext(PlayerContext)


    function handleSearchChange(e) {
        setSearchedPlayer(e.target.value)
    }

    function handleSearchFormSubmit(e) {
        e.preventDefault()
        setSearchedPlayer(e.target.value)
    }

    function handleCategoryChange(event) {
        setPositionCategory(event.target.value)
    }

    const filteredPlayers = allPlayers.filter((player) => {
        if (positionCategory === "All") {
            return true
        } else {
            return player.position === positionCategory
        }
    })

    const searchPlayers = filteredPlayers.filter((player) => {
        if (searchedPlayer === "") {
            return true
        } else {
            return player.name === searchedPlayer
        }
    })

    const playersToDisplay = searchPlayers.map((player) => {
            return <PlayerCard 
            key= {player.name} 
            player={player} />
    })

    if (!isLoggedIn) return <Redirect to="/login" />
    return (
        <div className="playerContainer">
            <div className="homepageHeader">
            <h1>Welcome, {header}</h1>
            <Filter onCategoryChange={handleCategoryChange}/>
            <form className= "searchForm" onSubmit={handleSearchFormSubmit}>
                <input 
                type="text" 
                name="searchPlayer" 
                value={searchedPlayer}
                placeholder="Search for a player.."
                onChange={handleSearchChange}
                >
                </input>
            </form>
            </div>
            {playersToDisplay}
        </div>
    )   
}

export default Home;