exports.up = function(knex) {
    return knex.schema.createTable('friends', friends => {
      friends.increments();

      friends
        .string('name', 112)
        .notNullable()
        .unique();
      friends.string('email', 112).notNullable();
    });
  };
  

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('friends');
};