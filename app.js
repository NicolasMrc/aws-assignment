const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const documentationRouter = require('./routes/documentation')
const { doubleNumber } = require('./routes/numbers')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const ENDPOINT = '/api/v1/'

app.use(ENDPOINT, documentationRouter)
app.route(ENDPOINT + 'numbers/:number').get(doubleNumber)

module.exports = app
