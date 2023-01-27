const express = require('express')
const app = express()
const port = 3000 // Todo: put in config file

app.get('/api/hellopari', (req, res) => {
  const res_text = `Hello, friend from Binary Inc. 
Wanna know random fact about Pari? 
Pari Solves communication problems.`

  res.send(res_text)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})