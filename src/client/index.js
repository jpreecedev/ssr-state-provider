import React from "react"
import { hydrate } from "react-dom"

import OuterApp from "./OuterApp"

hydrate(<OuterApp />, document.getElementById("root"))
