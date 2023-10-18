const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send("LOgin Page")
})

app.get('/signup', (req, res)=>{
    res.send("singup page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})