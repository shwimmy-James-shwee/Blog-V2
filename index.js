const express = require('express')
const path = require('path')

const postRoutes = require('./Routes/posts')

const server = express()

//server.use(express.static(path.join(__dirname, 'public'))) // pre express file structure refactor
// server.use(express.static(path.join(__dirname, 'client/build'))) // use for production?
server.use(express.static(path.join(__dirname, 'client'))) // use for dev?

//server.use(express.json())

server.use('/api/post', postRoutes)

module.exports = server

server.get('*', (req, res) => {
  //const appPath = path.join(__dirname, 'public', 'index.html') // pre express file structure refactor
  // const appPath = path.join(__dirname + '/client/build/index.html') // use for production?
  const appPath = path.join(__dirname + '/client/public/index.html') // use for dev?

  res.sendFile(appPath)
})

const port = process.env.PORT || 5000
server.listen(port)

console.log('Express server is listening on port ' + port)
