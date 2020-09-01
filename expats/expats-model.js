const db = require('../database/db-config.js');

module.exports = {
    find,
    findStoriesById,
    add,
    remove,
    update,
    findPosts,
    addStory,
    // findStories
}

function find() {
    return db('stories')
        .select('*');
};

function findStoriesById(id) {
    return db('stories as s')
        .join('photos as p', 'p.id','p.stories_id')
        .select('*')
        .where({user_id: id})
};

async function add(storyData) {
    const [id] = await db('stories')
        .insert(storyData, 'id');
    const result = findStoriesById(id)
    return result;
};

function remove(id) {
    return db('stories')
        .where({ id })
        .del();
};

function update(changes, id) {
    return db('stories')
        .where({ id })
        .update(changes)
        .returning('*');
};

// function findStories(id) {
//     return db('stories as s')
//         .join('photos as p', 'p.id','p.stories_id')
//         .select('*')
//         .where({user_id: id})
// };

function findPosts(id) {
    return db('users as u')
        .join('stories as s', 's.id','s.user_id' )
        .select('storyName', 's.storyPhoto', 's.user_id', 'u.userName', 'u.email')
        .where({user_id:id});
};

// function findPosts(id) {
//     return db('users as u')
//         .join('stories as s', 's.id', 's.storyName', 's.storyPhoto')
//         .select('*')
//         .where({ id});
// }

function addStory(story) {
    return db('stories')
        .insert(story)
        .returning(story);
};