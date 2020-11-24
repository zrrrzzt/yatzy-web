const AddPlayerForm = props => {
  const { addPlayer } = props
  const handleSubmit = event => {
    event.preventDefault()
    const nameField = document.getElementById('playername')
    addPlayer(nameField.value)
    nameField.value = ''
  }

  return (
    <form className='w-full max-w-sm' onSubmit={handleSubmit}>
      <div className='flex items-center border-b border-teal-500 py-2'>
        <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Player name' aria-label='Player name' id='playername' />
        <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded' type='submit'>
          Add
        </button>
      </div>
    </form>
  )
}

export default AddPlayerForm
