import Die from './die'

const Dice = props => {
  const { dice } = props
  return (
    <div className='flex flex-row'>
      {dice.map((value, index) => <Die value={value} key={index} />)}
    </div>
  )
}

export default Dice
