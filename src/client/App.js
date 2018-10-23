import * as React from "react"

const App = ({ yourName, anotherGuysName }) => {
  return (
    <p>
      <button type="button" onClick={() => alert("This is a message !")}>
        Click Me
      </button>
      <br />
      <br />Hello from App!
      <br />
      <span>Your name is: {yourName}</span>
      <br />
      <span>Another guys name is: {anotherGuysName}</span>
    </p>
  )
}

export default App
