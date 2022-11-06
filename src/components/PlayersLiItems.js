import React from 'react'

function TeamLiItems({ players }) {

    const playerItems = players.map((player) => {
        return <li className='playerListItem'>{player.position} - {player.name}</li>
    })


    return playerItems
}

export default TeamLiItems