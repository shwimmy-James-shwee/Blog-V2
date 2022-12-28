const express = require('express')

const db = require('../db/posts')

const router = express.Router()

router.get('/:id', (req, res) => {
  console.log('in express router get')
  const id = req.params.id
  res.send(`request for post: ${id}`)
  // db.getPostsByID(id)
  //   .then((post) => {
  //     res.json(post)
  //     return null
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     res.status(500).json({ message: 'Unable to get post' })
  //   })
})

router.get('/allPosts', (req, res) => {
  //const id = req.body.id
  db.getAllPosts()
    .then((posts) => {
      res.json(posts)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get all posts' })
    })
})

module.exports = router
