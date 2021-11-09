const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
// const { connection } = require('./utility/database')
const register = require('./routes/register')
const list = require('./routes/list')
// const DB = require('./utility/database')
const port = 8080
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api',register)

app.use('/',list)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})