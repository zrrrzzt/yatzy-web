import Dice from './dice'

const GameTable = props => {
  const { name, rolls, round } = props

  return (
    <div>
      <h2>{round}: {name}</h2>
      <div>
        {rolls && rolls.map((roll, index) => <Dice dice={roll} key={index} />)}
      </div>
    </div>
  )
}

export default GameTable
