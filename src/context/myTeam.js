import React, { createContext, useState, useEffect } from 'react';

const TeamContext = createContext();

function TeamProvider({ children }) {
    const [myTeam, setMyTeam] = useState({
        QB: {},
        RB: {},
        WR: {},
        TE: {},
        K: {},
        DEF: {},
      })
    const [savedTeams, setSavedTeams] = useState([])
    const [teamData, setTeamData] = useState({
        cityName: "",
        teamName: "",
        teamLogo: ""
    })

    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then((teams) => setSavedTeams(teams))
    }, []); 

    function addTeam(teamObj) {
        const teamKeys = Object.keys(teamObj)
        let teamName = teamKeys[0]
        setSavedTeams([
            ...savedTeams,
            {
                id: teamObj.id,
                myPlayers: teamObj["myPlayers"],
                teamName: teamName
            }
        ])
    }

    function handleSaveTeam() {
        const teamAndCity = `${teamData.cityName}, ${teamData.teamName}`
    
        const personalTeamData = {
          [teamAndCity]: {
            cityName: teamData.cityName,
            teamName: teamData.teamName,
            teamLogo: teamData.teamLogo
          },
          myPlayers: [myTeam.QB, myTeam.RB, myTeam.WR, myTeam.TE, myTeam.K, myTeam.DEF]
        }
        fetch('http://localhost:3000/teams', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(personalTeamData),
          })
            .then(res => res.json())
            .then((team) => addTeam(team))
            
          setMyTeam({
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {},
                DEF: {},
          })
          setTeamData({
                cityName: "",
                teamName: "",
                teamLogo: ""
          })
    }
      

    function handlePlayerClick(playerName) {
        fetch('http://localhost:3000/players') 
          .then(resp => resp.json())
          .then((players) => {
            const pickedPlayer = players.filter((player) => player.name === playerName)
            let playerObject = pickedPlayer[0]
            setMyTeam({
              ...myTeam,
              [playerObject.position]: {...playerObject}
            })
        })
    }

    return <TeamContext.Provider value={{ myTeam, handlePlayerClick, handleSaveTeam, teamData, setTeamData, savedTeams }}>{children}</TeamContext.Provider>;
}

export { TeamProvider, TeamContext }