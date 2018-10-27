/* eslint-disable react/prefer-stateless-function */

import * as React from "react"
import { StateConsumer } from "./state-provider"

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
