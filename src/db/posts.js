const connection = require('./connection')

module.exports = {
  getPostsByID,
  getAllPosts,
}

function getPostsByID(id, db = connection) {
  return db('posts').where('id', id).select()
}

function getAllPosts(db = connection) {
  return db('posts').select()
}
