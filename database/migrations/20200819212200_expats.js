
exports.up = function(knex) {
  return(
    knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128)
                .unique()
                .notNullable();
            tbl.string('password', 256)
                .notNullable();
            tbl.text('firstName', 128)
                .notNullable();
            tbl.text('lastName', 128)
                .notNullable();
            tbl.string('gender', 128)
                .notNullable();
            tbl.integer('age')
                .notNullable();
            tbl.string('email', 128)
                .notNullable()
                .unique();
        })
        .createTable('stories',tbl => {
            tbl.increments();
            tbl.string('storyName', 128)
                .notNullable();
            tbl.string('storyCity', 128)
                .notNullable();
            tbl.string('storyCountry', 128)
                .notNullable();
            tbl.timestamp('storyDate')
                .defaultTo(knex.fn.now());
            tbl.string('storyPhoto')
                .notNullable();
            tbl.text('storyDesc')
                .notNullable();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('users.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('photos', tbl => {
            tbl.increments();
            tbl.string('photoLink', 255);
                // .notNullable();
            tbl.text('photoDesc')
                .notNullable();
            tbl.timestamp('photoDate')
                .defaultTo(knex.fn.now());
            tbl.integer('stories_id')
                .unsigned()
                .notNullable()
                .references('stories.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
    )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('photos')
        .dropTableIfExists('stories')
        .dropTableIfExists('users')
  );
};
