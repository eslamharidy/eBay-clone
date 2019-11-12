const express = require('express')
const app = express ()

// const db = require('./db')

const cors = require('cors')
const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

// const Adv = require('./adv/model')
const advRouter = require('./adv/router')
app.use(advRouter)



const port = 4000
app.listen(port, console.log(`port listening on port: ${port}`))