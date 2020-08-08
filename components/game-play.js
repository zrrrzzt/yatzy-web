import { useState, useEffect } from 'react'
import GameTable from './game-table'

const GamePlay = props => {
  const { gameplay } = props
  const [nowPlaying, setNowPlaying] = useState()
  const [rolls, setRolls] = useState()
  const [round, setRound] = useState()
  useEffect(() => {
    if (gameplay) {
      gameplay.map(turns => {
        return turns.map(player => {
          const { name, round, rolls } = player
          const updateState = () => {
            setNowPlaying(name)
            setRolls(rolls)
            setRound(round)
          }
          return updateState
        })
      }).flat().map((element, index) => {
        setTimeout(element, 1000 + (1000 * index))
      })
    }
  }, [gameplay])

  return (
    <>
      {nowPlaying && <GameTable name={nowPlaying} rolls={rolls} round={round} />}
    </>
  )
}

export default GamePlay
