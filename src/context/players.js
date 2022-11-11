import React, { useState, useEffect, createContext } from "react";

const PlayerContext = createContext

function PlayerProvider({ children }) {

    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/players')
        .then(resp => resp.json())
        .then((players) => setAllPlayers(players))
    }, []); 

    return <PlayerContext.Provider value= {{ allPlayers }}>{children}</PlayerContext.Provider>
}

export { PlayerContext, PlayerProvider }