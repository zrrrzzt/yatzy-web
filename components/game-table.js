import Dice from './dice'

const GameTable = props => {
  const { name, rolls, round } = props

  return (
    <div>
      <h2 className='text-2xl'>Round: {round}</h2>
      <h2 className='text-2xl'>Player: {name}</h2>
      <div>
        {rolls && <Dice rolls={rolls} />}
      </div>
    </div>
  )
}

export default GameTable
