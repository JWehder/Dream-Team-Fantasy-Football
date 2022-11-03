import React from "react";

function PlayerRow({ position, team }) {
    return (
            <tr>
                <td>{position}</td>
                <td>{'undefined' ? "" : team.position.name}</td>
                <td>{ 'undefined' ? "" : team.position.teamName}</td>
                <td>{'undefined' ? "" : team.position.projectedPoints}</td>
                <td>{'undefined' ? "" : team.position.opponent}</td>
            </tr>
    )
}

export default PlayerRow;