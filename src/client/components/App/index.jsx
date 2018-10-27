import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { StateProvider } from "../../../shared/state-provider"

import Home from "../../pages/Home"
import About from "../../pages/About"
import NotFound from "../../pages/NotFound"

function App({ initialState }) {
  return (
    <StateProvider value={{ ...initialState }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="" component={NotFound} />
      </Switch>
    </StateProvider>
  )
}

export default App
