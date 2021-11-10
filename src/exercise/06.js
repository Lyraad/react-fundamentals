// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputBox = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    let inputString = inputBox.current.value
    onSubmitUsername(inputString)
  }

  function handleChange(e) {
    let inputString = inputBox.current.value
    console.log(inputString)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          ref={inputBox}
          onInput={handleChange}
          id="userInput"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
