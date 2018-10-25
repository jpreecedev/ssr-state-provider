import * as React from "react"
import { StateConsumer } from "../server/state-provider"

const withContext = mapStateToProps => Component => {
  class WithContext extends React.Component {
    render() {
      return (
        <StateConsumer>
          {({ globalState, updateState }) => (
            <Component
              {...this.props}
              {...mapStateToProps(globalState)}
              updateState={updateState}
            />
          )}
        </StateConsumer>
      )
    }
  }

  return WithContext
}

export default withContext
