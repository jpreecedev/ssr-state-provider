// load the things we need
import express from "express"
var app = express()

import React from "react"
import { renderToString } from "react-dom/server"

import OuterApp from "../client/OuterApp"

app.use(express.static("./dist/client"))

app.engine("ejs", require("ejs").__express)

app.set("view engine", "ejs")

const context = {
  anotherGuysName: "Jon"
}

const Markup = () => <OuterApp {...context} />

const body = renderToString(<Markup />)

// index page
app.get("/", function(req, res) {
  res.render("pages/index", {
    reactAppCode: body,
    ...context
  })
})

app.listen(3002)
console.log("Listening")
