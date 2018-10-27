import * as React from "react"
import withContext from "../../../shared/withContext"

function SetName({ updateState }) {
  return (
    <button
      type="button"
      className="button"
      onClick={() => updateState({ firstPersonsName: "John Smith" })}
    >
      Change first persons name
    </button>
  )
}

const mapStateToProps = state => ({
  updateState: state.updateState
})

export default withContext(mapStateToProps)(SetName)
