const express = require('express')
const morgan = require('morgan') 


const app = express()
const port = 3000

//use middlewares
app.use(morgan("dev"))

app.get('/', (req, res) => {
  res.send('Hello Worlddddd!')
})

app.listen(port, () => {
  console.log(`my app listening on port ${port}`)
})