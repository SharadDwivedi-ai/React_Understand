import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")
  //useRef hook  
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()-_=+[]{}\|;:'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPass(pass)

  }, [length, numAllow, charAllow, setPass])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 6)
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-3xl text-center text-white m-5'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-gray-400'>
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1.5 px-4"
          placeholder='Password'
          readOnly ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 text-white py-1.5 px-3 shrink-0 cursor-pointer'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            max={50}
            min={4}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id='numberInput'
            onChange={() => {
              setNumAllow((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
