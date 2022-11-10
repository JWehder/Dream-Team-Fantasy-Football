import React, { useState, useEffect } from 'react';

const TeamContext = React.createContext();

function TeamProvider({ children }) {
    const [myTeam, setMyTeam] = useState({
        QB: {},
        RB: {},
        WR: {},
        TE: {},
        K: {},
        DEF: {},
      })

      function handlePlayerClick(playerName) {
        fetch('http://localhost:3000/players') 
          .then(resp => resp.json())
          .then((players) => {
            const pickedPlayer = players.filter((player) => player.name === playerName)
            let playerObject = pickedPlayer[0]
            setMyTeam({
              ...myTeam,
              [playerObject.position]: {...playerObject}
            })
        })
      }

    return <TeamContext.Provider value={{ myTeam, handlePlayerClick }}>{children}</TeamContext.Provider>;
}

export { TeamProvider, TeamContext }