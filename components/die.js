const Die = props => {
  const { value } = props
  return (
    <div className='mr-1'>
      {value === 1 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-1-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
      {value === 2 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-2-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
      {value === 3 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-3-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
      {value === 4 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-4-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
      {value === 5 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-5-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
      {value === 6 && <svg width='3em' height='3em' viewBox='0 0 16 16' className='bi bi-dice-6-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>}
    </div>
  )
}

export default Die
