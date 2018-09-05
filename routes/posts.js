//const {check, validationResult} = require('express-validator/check')

module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
    let postId = req.store.posts.length
    req.store.posts.push(req.body)
    res.status(201).send({'Post Created with ID': postId})
  },
  editPost(req, res) {
    req.store.posts[req.params.postId] = req.body
    res.status(200).send({'Post Edited': req.store.posts[req.params.postId]})
  },
  deletePost(req, res) {
    req.store.posts.splice(req.params.postId, 1)
    res.status(204).send({'Post Deleted': req.store.posts[req.params.postId]})
  }
}
