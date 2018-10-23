import * as React from "react"

import { StateProvider, StateConsumer } from "../server/state-provider"
import App from "./App"

const OuterApp = props => {
  return (
    <StateProvider value={{ ...props }}>
      <StateConsumer>
        {({ globalState }) => {
          return (
            <App
              yourName={globalState.yourName}
              anotherGuysName={globalState.anotherGuysName}
            />
          )
        }}
      </StateConsumer>
    </StateProvider>
  )
}

export default OuterApp
