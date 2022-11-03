import React from "react";
import '../index.css'

function PlayerCard({ player, handlePlayerClick }) {
    return (
        <div className="card">
            <h2>{player.name}</h2>
            <p>{player.position} - {player.teamName}</p>
            <p>Projected {player.projectedPoints} Points vs {player.opponent}</p>
            <button onClick={((player) => handlePlayerClick(player))}>Add to Team</button>

        </div>
    )
}

export default PlayerCard;