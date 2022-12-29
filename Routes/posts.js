const express = require('express')

const db = require('../db/posts')

const router = express.Router()

router.get('/post/:id', (req, res) => {
  const id = req.params.id
  db.getPostsByID(id)
    .then((post) => {
      //console.log('server tried to get post, the ID was: ' + id)
      res.json(post)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get post' })
    })
})

router.get('/allPosts', (req, res) => {
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
