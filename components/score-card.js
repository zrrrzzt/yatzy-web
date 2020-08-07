const Header = props => {
  return (
    <thead>
      <tr>
        { Object.keys(props).map(item => <th className='px-4 py-2'>{item}</th>)}
      </tr>
    </thead>
  )
}

const Row = props => {
  return (
    <thead>
      <tr>
        { Object.values(props).map(item => <td className='border px-4 py-2'>{item}</td>)}
      </tr>
    </thead>
  )
}

const scoreCard = props => {
  const { results } = props
  return (
    <div>
      <table class="table-auto mb-4">
        { results.map((row, index) => index === 0 ? <><Header {...row} /><Row {...row} /></> : <Row {...row} />) }
      </table>
    </div>
  )
}

export default scoreCard
