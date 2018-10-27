import * as React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "../shared/state-provider"

import "../shared/styles.css"
import App from "./components/App"

hydrate(
  <Router>
    <StateProvider>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
)
