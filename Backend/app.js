const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const candidateRoute = require('./routes/candidate')

const port = 8080

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/candidate',candidateRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})