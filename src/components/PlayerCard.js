import React from "react";
import '../index.css'

function PlayerCard({ player, onPlayerClick }) {
    return (
        <div className="card">
            <h2>{player.name}</h2>
            <p>{player.position} - {player.teamName}</p>
            <p>Projected {player.projectedPoints} Points vs {player.opponent}</p>
            <button onClick={((player) => onPlayerClick(player))}>Add to Team</button>

        </div>
    )
}

export default PlayerCard;