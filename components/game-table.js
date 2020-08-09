import Dice from './dice'

const GameTable = props => {
  const { name, rolls, round } = props

  return (
    <div className='rounded shadow-lg mt-2 mb-4 p-8'>
      <h2 className='text-2xl mb-2'>{round}: {name}</h2>
      <div>
        {rolls && <Dice rolls={rolls} />}
      </div>
    </div>
  )
}

export default GameTable
