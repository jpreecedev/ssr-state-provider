/* eslint-disable no-underscore-dangle, no-multi-assign */

import * as React from "react"

global.__GLOBAL_STATE__ = global.__GLOBAL_STATE__ || {}

const ReactContext = React.createContext({})
const STATE_CHANGED = "GLOBAL_STATE_CHANGED"

global.updateState = state => {
  const newState = (global.__GLOBAL_STATE__ = {
    ...global.__GLOBAL_STATE__,
    ...state
  })
  global.dispatchEvent(new CustomEvent(STATE_CHANGED, { detail: newState }))
}

export const StateConsumer = ReactContext.Consumer

export class StateProvider extends React.Component {
  constructor(props) {
    super(props)

    if (global.addEventListener) {
      global.addEventListener(STATE_CHANGED, ({ detail }) =>
        this.setState(detail)
      )
    }

    this.state = {
      ...global.__GLOBAL_STATE__,
      ...props.value
    }
  }

  componentDidMount = () => {
    global.updateState(this.state)
  }

  updateState = state => {
    global.updateState(state)
  }

  render() {
    const { children } = this.props

    return (
      <ReactContext.Provider
        value={{
          globalState: this.state,
          updateState: this.updateState
        }}
      >
        {children}
      </ReactContext.Provider>
    )
  }
}
