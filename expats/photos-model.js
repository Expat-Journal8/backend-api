const db = require('../database/db-config.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
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
        .insert(photo);
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