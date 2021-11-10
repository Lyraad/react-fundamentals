// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputBox = useRef(null)
  // const [myErr, updateMyErr] = useState(null)
  const [myValue, updateMyVal] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // let input = inputBox.current.value
    // onSubmitUsername(input)
  }

  function handleChange(e) {
    let inputString = e.target.value
    updateMyVal(inputString.toLowerCase())
    // let errState = inputString !== inputString.toLowerCase()
    // updateMyErr(errState ? 'Username invlaid (lower case only)' : null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          ref={inputBox}
          onChange={handleChange}
          id="userInput"
          type="text"
          value={myValue}
        />
      </div>
      {/* <button disabled={Boolean(myErr)} type="submit"> */}
      <button type="submit">Submit</button>
      {/* <div>{myErr}</div> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
