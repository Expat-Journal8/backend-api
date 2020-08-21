const db = require('../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findStories,
    update
}

function add(user) {
    return db('users')
        .insert(user);
};

function find() {
    return db('users')
        .select('id', 'username', 'password', 'email', 'firstName');
};

function findBy(filter) {
    return db('users')
        .where(filter);
};

function findById(id) {
    return db('users')
        .where({ id });
};

function findStories(id) {
    return db('stories as s')
        .join('photos as p', 'p.id','p.stories_id')
        .select('s.id','s.storyName', 'p.photoLink')
        .where({stories_id: id})
};

function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes);
};
