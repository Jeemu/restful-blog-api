module.exports = {

  const {check, validationResult} = require('express-validator/check')
  
  app.get('/posts', (req, res) => {
    res.status(200).send(store.posts)
  })

  app.post('/posts', (req, res) => {
    let postId = store.posts.length
    store.posts.push(req.body)
    res.status(201).send('Post Created with ID:', postId)
  })

  app.put('/posts/:postId', (req, res) => {
    store.posts[req.params.postId] = req.body
    res.status(200).send('Post Edited:', store.posts[req.params.postId])
  })

  app.delete('/posts/:postId', (req, res) => {
    store.posts.splice(req.params.postId, 1)
    res.status(204).send('Post Deleted:', store.posts[req.params.postId])
  })


}
