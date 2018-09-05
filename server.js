const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const routes = require('./routes')

let app = express()

let store = {
  posts: [
    {
      name: 'Top 10 ES6 Features Every Developer Must Know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don\'t know what it means move on',
      comments: [
        {text: 'This is the first comment'},
        {text: 'This is supposed to be the second comment'},
        {text: 'Right to the third one... And still counting'}
      ]
    }
  ]
}

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())

app.use((req, res, next) => {
  req.store = store
  next()
})

app.get('/posts',routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.editPost)
app.delete('/posts/:postId', routes.posts.deletePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.editComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.deleteComment)

app.listen(3000)
