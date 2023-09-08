import React, { useState } from 'react'

const Team = () => {
  const [player, setPlayer] = useState(11);

  const addPlayer = () => {
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  }
  const removePlayer = () => {
    // const newPlayer = player - 1;
    setPlayer(player - 1);
  }

  const teamStyle = {
    border : "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "20px"
  }

  return (
    <div style={teamStyle}>
     <h3>Players: {player}</h3> 
     <button onClick={addPlayer}>Add</button>
     <button onClick={removePlayer}>Remove</button>
    </div>
  )
}

export default Team