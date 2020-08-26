const db = require('../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findStories,
    update,
    addStory,
    remove,
}

function add(user) {
    return db('users')
        .insert(user)
        .returning(['id', 'username', 'password', 'email']);
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
        .select('s.id','s.storyName', 'p.photoLink', 's.storyDate', 's.user_id', 'p.stories_id')
        .where({stories_id: id})
};


function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes);
};

function addStory(story) {
    return db('stories')
        .insert(story)
        .returning(story);
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};

