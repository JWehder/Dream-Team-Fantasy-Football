import React from "react";
import { Redirect } from "react-router-dom"

function CreateTeam({ setTeam, team, isLoggedIn }) {

    function handleSubmit(e) {
        e.preventDefault() 
        const teamData = {
          cityName: team.cityName,
          teamName: team.teamName,
          teamLogo: team.teamLogo
        }
        setTeam(teamData);
        return <Redirect to="/myteam" />
    }

    function handleChange(e) {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={team.cityName} 
                name="cityName"
                placeholder="City Name"
                onChange={handleChange}
                />
                <input
                type="text"
                value={team.teamName}
                name="teamName"
                placeholder="Team Name"
                onChange={handleChange}
                />
                <input
                type="text"
                value={team.teamLogo}
                name="teamLogo"
                placeholder="Insert Image URL here"
                onChange={handleChange}
                />
                <input
                type="submit"
                value="Create Team"
                />
            </form>
            
        </div>
    )
}

export default CreateTeam;