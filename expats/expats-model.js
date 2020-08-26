const db = require('../database/db-config.js');

module.exports = {
    find,
    findStoriesById,
    add,
    remove,
    update,
    findStories,
}

function find() {
    return db('stories')
        .select('*');
};

function findStoriesById(id) {
    return db('stories')
    .select('*')
    .where({id})
    .first();
};

function add(story) {
    return db('stories')
        .insert(story)
        .returning(story);
};

function remove(id) {
    return db('stories')
        .where({ id })
        .del();
};

function update(changes, id) {
    return db('stories')
        .where({ id })
        .update(changes);
};

function findStories(id) {
    return db('stories as s')
        .join('photos as p', 'p.id','p.stories_id')
        .select('s.id','s.storyName', 'p.photoLink', 's.user_id', 'p.stories_id')
        .where({user_id: id})
};