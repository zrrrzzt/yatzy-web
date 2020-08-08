import Die from './die'

const Dice = props => {
  const { dice } = props
  return (
    <div>
      { dice.map(value => <Die value={value} />)}
    </div>
  )
}

export default Dice
