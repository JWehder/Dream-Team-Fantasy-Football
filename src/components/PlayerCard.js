import React, { useContext } from "react";
import '../index.css'
import { TeamContext } from "../context/myTeam";

function PlayerCard({ player }) {
 
    const { handlePlayerClick } = useContext(TeamContext)

    return (
        <div className="card">
            <h2>{player.name}</h2>
            <p>{player.position} - {player.teamName}</p>
            <p>Projected {player.projectedPoints} Points vs {player.opponent}</p>
            <button className= "ui button" onClick={(e) => handlePlayerClick(e.nativeEvent.path[1].firstChild.textContent)}>Add to Team</button>
        </div>
    )
}

export default PlayerCard;