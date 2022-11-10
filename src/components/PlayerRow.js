import React, { useContext } from "react";
import { TeamContext } from "../context/myTeam";


function PlayerRow({ position }) {
    const myTeam = useContext(TeamContext)

    return (
            <tr>
                <td>{position}</td>
                <td>{myTeam[position].name ? myTeam[position].name : "" }</td>
                <td>{myTeam[position].teamName ? myTeam[position].teamName : ""}</td>
                <td>{myTeam[position].projectedPoints ? myTeam[position].projectedPoints : ""}</td>
                <td>{myTeam[position].opponent ? myTeam[position].opponent : ""}</td>
            </tr>
    )
}

export default PlayerRow;