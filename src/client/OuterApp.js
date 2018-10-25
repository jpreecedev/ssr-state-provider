import * as React from "react"

import { StateProvider } from "../server/state-provider"
import App from "./App"

const OuterApp = props => {
  return (
    <StateProvider value={{ ...props }}>
      <App />
    </StateProvider>
  )
}

export default OuterApp
