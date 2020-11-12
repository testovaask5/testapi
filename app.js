const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/message', (req, res) => {
    res.send({ message: 'Hello' })
})

app.post('/api/message', (req, res, next) => {
    console.log('Middleware 1');
    next()
    res.send({ message: 'POST message' })
}, (req, res) => {
    console.log('Middleware 2');
    res.send({ message: 'POST message' })
}, (req, res) => {
    console.log('Middleware 3');
    res.send({ message: 'POST message' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})