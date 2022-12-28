const express = require('express')
const path = require('path')

const postRoutes = require('./Routes/posts')

const server = express()

//server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join(__dirname, '/../public')))
//server.use(express.json())

server.use('/post', postRoutes)

module.exports = server

server.get('*', (req, res) => {
  //const appPath = path.join(__dirname, 'public', 'index.html')
  const appPath = path.join(__dirname, '/../public', 'index.html')
  res.sendFile(appPath)
})
