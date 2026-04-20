import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Count() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(prev => prev + 1)
    console.log(count);

  }
  return (
    <>
      <h1 className='mt-5'>{count}</h1>
      <button className='p-2 mt-5 btn btn-primary' onClick={handleClick} aria-label='Increment counter'>Count </button>
    </>
  )

}
export default Count
