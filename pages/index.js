import { useState } from 'react'
import AddPlayerForm from '../components/add-player-form'
import Player from '../components/player'

const HomePage = () => {
  const [players, setPlayers] = useState([])
  const addPlayer = player => {
    setPlayers(players => [...players, player])
  }
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-mono'>Yatzy</h1>
        <div>Plays the game... so you don't have to</div>
        <AddPlayerForm addPlayer={addPlayer} />
        {players.map((player, index) => <Player player={player} key={index} />)}
      </div>
    </>
  )
}

export default HomePage
