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

async function add(photoData) {
    const [id] = await db('photos')
        .insert(photoData, 'id');
    const result = findById(id)
    return result;
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