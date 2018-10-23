// load the things we need
import express from "express"
var app = express()

import React from "react"
import { renderToString } from "react-dom/server"

import App from "../client/App"

import { StateProvider, StateConsumer } from "./state-provider"
import Html from "../client/HTML"

app.engine("ejs", require("ejs").__express)

app.set("view engine", "ejs")

// const markup = (
//   <StateProvider>
//     <p>
//       <StateConsumer>
//         {({ globalState }) => {
//           return <p>Your name is: {globalState.yourName}</p>
//         }}
//       </StateConsumer>
//     </p>
//   </StateProvider>
// )

const body = renderToString(App)
const title = "Foo bar buzz"

// index page
app.get("/", function(req, res) {
  res.send(
    Html({
      body,
      title
    })
  )
  // res.render("pages/index", {
  //   reactAppCode:
  // })
})

app.listen(3002)
console.log("Listening")
