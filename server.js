const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')

let app = express()

let store = {}
let store.posts = []
let store.posts.comments = []

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())



app.listen(3000)
