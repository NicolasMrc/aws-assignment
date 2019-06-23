const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const documentationRouter = require('./routes/documentation')
const { doubleNumber } = require('./routes/numbers')

const app = express()
const API_ENDPOINT = '/api/v1'

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', documentationRouter)
app.route(API_ENDPOINT + '/numbers/:number').get(doubleNumber)

app.route('/staindex.htmltus').get(function (req, res) {
  res.send({ message: 'ok' })
})

module.exports = app
