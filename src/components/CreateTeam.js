import React from "react";
import { Redirect } from "react-router-dom"

function CreateTeam({ setTeam, team, isLoggedIn }) {





    if (!isLoggedIn) return <Redirect to="/login" />

    return (
        <div>
            
        </div>
    )
}

export default CreateTeam;