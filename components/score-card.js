const Row = props => {
  return (
    <tr>
      {Object.values(props).map((item, index) => <td className='border px-4 py-2' key={index}>{item}</td>)}
    </tr>
  )
}

const Header = props => {
  return (
    <tr>
      {Object.keys(props).map((item, index) => <th className='px-4 py-2 text-left' key={index}>{item}</th>)}
    </tr>
  )
}

const scoreCard = props => {
  const { results } = props
  return (
    <div>
      <table className='table-auto mt-2 mb-4 rounded shadow-lg'>
        <thead>
          <Header {...results[0]} />
        </thead>
        <tbody>
          {results.map((row, index) => <Row {...row} key={`row-${index}`} />)}
        </tbody>
      </table>
    </div>
  )
}

export default scoreCard
