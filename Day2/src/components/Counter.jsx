import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(prev => prev < 20 ? prev + 1 : 20);
  const handleDecrease = () => setCount(prev => prev > 0 ? prev - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrease}> Increase </button>
        <button onClick={handleDecrease}> Decrease </button>
        <button onClick={handleReset}> Reset </button>
      </div>
    </>
  )
} 