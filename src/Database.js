// const sqlite3 = require('sqlite3').verbose()
// const bcrypt = require('bcryptjs')

// function CreateDB() {
//   const db = new sqlite3.Database(
//     './postsDB.db',
//     sqlite3.OPEN_READWRITE,
//     (err) => {
//       if (err) return console.error(err.message)
//     }
//   )

//   let createPostTable =
//     'CREATE TABLE posts(id INTEGER PRIMARY KEY, name, datePublished, postType, blurb, tags, script)'

//   db.run(createPostTable)
// }

// export default CreateDB
