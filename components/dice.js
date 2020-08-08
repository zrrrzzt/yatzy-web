import Die from './die'

const Dice = props => {
  const { dice } = props
  return (
    <div>
      {dice.map((value, index) => <Die value={value} key={index} />)}
    </div>
  )
}

export default Dice
