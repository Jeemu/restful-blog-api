//const {check, validationResult} = require('express-validator/check')

module.exports = {
  getComments(req, res) {
    res.status(200).send(req.store.posts[req.params.postId].comments)
  },
  addComment(req, res) {
    let newComment = req.body
    let komments = req.store.posts[req.params.postId].comments
    let commentId = komments.length
    komments.push(newComment)
    res.status(201).send({'Comment Created with ID': commentId})
  },
  editComment(req, res) {
    req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send({'Comment Edited': req.store.posts[req.params.postId].comments[req.params.commentId]})
  },
  deleteComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send({'Comment Deleted': req.store.posts[req.params.postId].comments[req.params.commentId]})
  }
}
