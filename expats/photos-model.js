const db = require('../database/db-config.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findPhotos,
}

function find() {
    return db('photos')
        .select('*');
};

function findById(id) {
    return db('photos')
        .where({ id });
};

function add(photo) {
    return db('photos')
        .insert(photo)
        .returning(photo);
};

function remove(id) {
    return db('photos')
        .where({ id })
        .del();
};

function update(changes, id) {
    return db('photos')
        .where({ id })
        .update(changes);
};

function findPhotos(id) {
    return db('stories as s')
        .join('photos as p', 'p.id','p.stories_id')
        .select('s.id','s.storyName', 'p.photoLink', 's.user_id', 'p.stories_id')
        .where({user_id: id})
};