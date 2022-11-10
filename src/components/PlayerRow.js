import React, { useContext } from "react";
import MyTeamContext from "./App"


function PlayerRow({ position }) {

    import { MyTeamContext } from "./App";

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