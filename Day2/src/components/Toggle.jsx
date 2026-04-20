import { useState } from "react";

export function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}>Toggle</button>
      {show && <h1>Welcome to my toggle App!!</h1>}
    </>
  )
}