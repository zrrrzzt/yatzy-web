const AddPlayerForm = props => {
  const { addPlayer } = props
  const handleClick = () => {
    const nameField = document.getElementById('playername')
    addPlayer(nameField.value)
    nameField.value = ''
  }

  return (
    <div className='w-full max-w-sm'>
      <div className='flex items-center border-b border-teal-500 py-2'>
        <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Player name' aria-label='Player name' id='playername' />
        <button onClick={handleClick} className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='button'>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddPlayerForm
