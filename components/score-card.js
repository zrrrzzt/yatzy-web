const scoreCard = props => {
  const { results } = props
  return (
    <div>
      { JSON.stringify(results) }
    </div>
  )
}

export default scoreCard
