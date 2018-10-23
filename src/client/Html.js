import * as React from "react"

const Html = ({ body, title }) =>
  `  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
</head>

<body>
  <div id="root">
  ${body}
  </div>
</body>

</html>`

export default Html