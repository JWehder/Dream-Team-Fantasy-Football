import React from "react";
import "../index.css"

function CreateTeam({ setTeam, team, isLoggedIn }) {

    function handleSubmit(e) {
        e.preventDefault() 
        const teamData = {
          cityName: team.cityName,
          teamName: team.teamName,
          teamLogo: team.teamLogo
        }
        setTeam(teamData);
    }

    function handleChange(e) {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="teamForm">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={team.cityName} 
                name="cityName"
                placeholder="City Name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={team.teamName}
                name="teamName"
                placeholder="Team Name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={team.teamLogo}
                name="teamLogo"
                placeholder="Insert Image URL here"
                onChange={handleChange}
                required
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