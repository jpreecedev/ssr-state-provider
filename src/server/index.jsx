/* eslint-disable no-underscore-dangle */

import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import App from "../client/components/App"

const app = express()
app.use(express.static("./dist/client"))
app.engine("ejs", require("ejs").__express)

app.set("view engine", "ejs")

const initialState = {
  secondPersonsName: "Mike Anderson"
}

app.get("/*", (req, res) => {
  res.render("pages/index", {
    reactAppCode: renderToString(
      <StaticRouter context={{}} location={req.url}>
        <App initialState={initialState} />
      </StaticRouter>
    ),
    ...initialState
  })
})

app.use((req, res) => {
  res.redirect("/")
})

app.listen(3002)

console.log("Listening on http://localhost:3002")
