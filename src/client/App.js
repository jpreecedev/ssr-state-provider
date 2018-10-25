import * as React from "react"
import withContext from "../shared/withContext"

const App = ({ yourName, anotherGuysName }) => (
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

const mapStateToProps = state => ({
  yourName: state.yourName,
  anotherGuysName: state.anotherGuysName
})

export default withContext(mapStateToProps)(App)
