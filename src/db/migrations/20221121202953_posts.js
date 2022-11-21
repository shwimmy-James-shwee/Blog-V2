exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id')
    table.string('name')
    table.string('datePublished')
    table.string('postType')
    table.string('blurb')
    table.string('tags')
    table.string('content')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
