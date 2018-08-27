const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')

let app = express()

let store = {}
store.posts = []
store.posts.comments = []

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())

const {posts, comments} = require('./routes')

//console.log(comments)
/*
let getPosts = posts.getPosts()
let addPost = posts.addPost()
let editPost = posts.editPost()
let deletePost = posts.deletePost()
let getComments = comments.getComments()
let addComment = comments.addComment()
let editComment = comments.editComment()
let deleteComment = comments.deleteComment()*/

app.listen(3000)
