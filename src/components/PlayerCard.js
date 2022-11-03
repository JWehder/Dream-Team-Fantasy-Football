import React from "react";
import '../index.css'

function PlayerCard({ player }) {
    return (
        <div className="card">
            <h2>{player.name}</h2>
            <p>{player.position} - {player.teamName}</p>
            <p>Projected {player.projectedPoints} vs {player.opponent}</p>

        </div>
    )
}

export default PlayerCard;