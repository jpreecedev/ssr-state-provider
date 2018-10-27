import * as React from "react"
import { shallow } from "enzyme"

import { Home } from ".."

function render(props) {
  return shallow(<Home {...props} />)
}

beforeAll(() => {
  global.alert = jest.fn()
})

test("should render default title", () => {
  const renderedComponent = render()
  const header = renderedComponent.find("h1")
  expect(header.text()).toBe(
    "Server Side Rendered ReactJS application with state provider"
  )
})

test("should show an alert", () => {
  const renderedComponent = render()
  const button = renderedComponent.find("button")

  button.simulate("click")

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith("I am a message box!")
})
