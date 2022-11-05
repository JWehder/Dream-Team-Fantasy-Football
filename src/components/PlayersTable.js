import React from "react"
import PlayerRow from "./PlayerRow";
import "../index.css"

function PlayersTable({ myTeam, positions }) {

    const playersToDisplay = positions.map((position) => {
        return <PlayerRow key= {position} position={position} myTeam={myTeam} />
    })
  
    return (
        <div>
            <table className="playersTable">
                <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Projected Points</th>
                    <th>Opponent</th>
                </tr>
                </thead>
                <tbody>
                {playersToDisplay}
                </tbody>
            </table>
        </div>
    );
}

export default PlayersTable;