const sendTelegramMessage = require('./telegram')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  sendTelegramMessage('-605750959', req.query.msg)
  res.send('send:' + req.query.msg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})