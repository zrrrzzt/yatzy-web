import Dice from "./dice"

const Die = props => {
  const { value } = props
  return  (
    <div>
      { value }
    </div>
  )
}

export default Die
