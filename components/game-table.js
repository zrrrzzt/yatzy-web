import Dice from './dice'

const GameTable = props => {
  const { name, rolls, round } = props
  
  return (
    <div>
      <h2>{round}: {name}</h2>
      <div>
        { rolls && rolls.map(roll => <Dice dice={roll} />)}
      </div>
    </div>
  )
}

export default GameTable
