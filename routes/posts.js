const express = require('express')
//const {check, validationResult} = require('express-validator/check')
let app = express()

module.exports = {

  getPosts(req, res) {
    app.get('/posts', (req, res) => {
      res.status(200).send(store.posts)
    })
  },
  addPost(req, res) {
    app.post('/posts', (req, res) => {
      let postId = store.posts.length
      store.posts.push(req.body)
      res.status(201).send({'Post Created with ID': postId})
    })
  },
  editPost(req, res) {
    app.put('/posts/:postId', (req, res) => {
      store.posts[req.params.postId] = req.body
      res.status(200).send({'Post Edited': store.posts[req.params.postId]})
    })
  },
  deletePost(req, res) {
    app.delete('/posts/:postId', (req, res) => {
      store.posts.splice(req.params.postId, 1)
      res.status(204).send({'Post Deleted': store.posts[req.params.postId]})
    })
  }
}
