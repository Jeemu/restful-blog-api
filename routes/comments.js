const express = require('express')
//const {check, validationResult} = require('express-validator/check')
let app = express()

module.exports = {

  getComments(req, res) {
    app.get('/posts/:postId/comments', (req, res) => {
      res.status(200).send(store.posts.comments)
    })
  },
  addComment(req, res) {
    app.post('/posts/:postId/comments', (req, res) => {
      let commentId = store.posts.comments.length
      store.posts.comments.push(req.body)
      res.status(201).send({'Comment Created with ID': commentId})
    })
  },
  editComment(req, res) {
    app.put('/posts/:postId/comments/:commentId', (req, res) => {
      store.posts.comments[req.params.commentId] = req.body
      res.status(200).send({'Comment Edited': store.posts.comments[req.params.commentId]})
    })
  },
  deleteComment(req, res) {
    app.delete('/posts/:postId/comments/:commentId', (req, res) => {
      store.posts.comments.splice(req.params.commentId, 1)
      res.status(204).send({'Comment Deleted': store.posts.comments[req.params.commentId]})
    })
  }
}
