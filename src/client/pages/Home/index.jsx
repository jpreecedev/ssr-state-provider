import * as React from "react"
import { Link } from "react-router-dom"
import withContext from "../../../shared/withContext"

import Layout from "../../components/Layout"
import SetName from "../../components/SetName"

export function Home({ firstPersonsName, secondPersonsName }) {
  return (
    <Layout>
      <h1>Server Side Rendered ReactJS application with state provider</h1>
      <button
        type="button"
        className="button"
        onClick={() => alert("I am a message box!")}
      >
        Show me a message
      </button>
      <div>
        <p>Data from global state:</p>
        <p>{`First persons name is: ${firstPersonsName}`}</p>
        <p>{`Second persons name is: ${secondPersonsName}`}</p>
        <SetName />
      </div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/nope">404 Page</Link>
    </Layout>
  )
}

const mapStateToProps = state => ({
  firstPersonsName: state.firstPersonsName,
  secondPersonsName: state.secondPersonsName
})

export default withContext(mapStateToProps)(Home)
