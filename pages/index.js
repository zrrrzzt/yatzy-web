import { useState } from 'react'
import yatzy from 'yatzy'
import AddPlayerForm from '../components/add-player-form'
import Player from '../components/player'
import ScoreCard from '../components/score-card'
import GamePlay from '../components/game-play'

const HomePage = () => {
  const [players, setPlayers] = useState([])
  const [results, setResults] = useState()
  const [gamePlay, setGamePlay] = useState()

  const addPlayer = player => {
    setPlayers(players => [...players, player])
  }
  const playGame = () => {
    const Game = yatzy()
    players.map(Game.addPlayer)
    Game.randomizePlayersOrder()
    Game.play()
    setResults(Game.generateScoreCard())
  }
  const playGameSlow = () => {
    const Game = yatzy()
    players.map(Game.addPlayer)
    Game.randomizePlayersOrder()
    Game.play()
    setGamePlay(Game.generateGamePlay())
  }
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-mono'>Yatzy</h1>
        <div>Plays the game... so you don't have to</div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className='mb-2 mt-2'>
          {players.length > 0 && <h2 className='text-2xl font-mono'>Players</h2>}
          {players.map((player, index) => <Player player={player} key={index} />)}
        </div>
        <div>
          <button onClick={playGame} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2'>Play game quick</button>
          <button onClick={playGameSlow} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Play game slow</button>
        </div>
        {gamePlay && <GamePlay gameplay={gamePlay} />}
        {results && <ScoreCard results={results} />}
      </div>
    </>
  )
}

export default HomePage
