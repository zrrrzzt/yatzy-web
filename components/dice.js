import { useEffect, useState } from 'react'
import Die from './die'

const Dice = props => {
  const { rolls } = props
  const [dice, setDice] = useState()
  useEffect(() => {
    rolls.map((roll, index) => {
      const updateState = () => {
        setDice(roll)
      }
      return setTimeout(updateState, (500 * index))
    })
  }, [rolls])
  return (
    <div className='flex flex-row'>
      {dice && dice.sort().map((value, index) => <Die value={value} key={index} />)}
    </div>
  )
}

export default Dice
