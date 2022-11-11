import React, { useContext } from "react";
import { TeamContext } from "../context/myTeam";
import "../index.css"

function CreateTeam() {

    const { handleSaveTeam, teamData, setTeamData } = useContext(TeamContext)

    function handleSubmit(e) {
        e.preventDefault() 
        const team = {
          cityName: teamData.cityName,
          teamName: teamData.teamName,
          teamLogo: teamData.teamLogo
        }
        setTeamData(team);
    }

    function handleChange(e) {
        setTeamData({
            ...teamData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="teamForm">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={teamData.cityName} 
                name="cityName"
                placeholder="City Name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={teamData.teamName}
                name="teamName"
                placeholder="Team Name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={teamData.teamLogo}
                name="teamLogo"
                placeholder="Insert Image URL here"
                onChange={handleChange}
                required
                />
                <input
                type="submit"
                value="Create Team"
                onClick={handleSaveTeam}
                />
            </form>
            
        </div>
    )
}

export default CreateTeam;