import React, {useState, useEffect} from "react";

function SavedTeams() {

    const [savedTeams, setSavedTeams] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then((team) => setSavedTeams(team))
    }, []); 

    

    return (
        <h1>creating functionality...</h1>

    )
}

export default SavedTeams;