import React, { useContext } from "react";


function PlayerRow({ position }) {

    const playerData = useContext(MyTeamContext);

    return (
            <tr>
                <td>{position}</td>
                <td>{myTeam[position].name ? playerData[position].name : "" }</td>
                <td>{playerData[position].teamName ? playerData[position].teamName : ""}</td>
                <td>{playerData[position].projectedPoints ? playerData[position].projectedPoints : ""}</td>
                <td>{playerData[position].opponent ? playerData[position].opponent : ""}</td>
            </tr>
    )
}

export default PlayerRow;