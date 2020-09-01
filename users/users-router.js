const express = require('express');
const users = require('./users-model.js');
const router = express.Router();
const stories = require('../expats/expats-model.js')

router.get('/', (req, res) => {
    users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get users'
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    users.findById(id)
        .then(users => {
           const user = users[0];
           if (user) {
               res.json(user)
           } else {
               res.status(404).json({
                   message: 'Cannot find user by that id'
               })
           }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error getting user'
            });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    users.update(changes, id)
        .then(user => {
            if (user) {
                res.json({user});
            } else {
                res.status(400).json({
                    message: 'Could not find user with given ID'
                });
            }
        }) 
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update user'
            });
        });
});

router.get('/:id/stories', (req, res) => {
    const { id } = req.params;
    users.findById(id)
    .then(user =>{
        if(user){
            console.log(user)
            stories.findPosts(id)
            .then(stories =>{
                const story = stories[0];
                console.log(story.user_id)
                res.status(200).json(story)
            })
            .catch(err =>{
                console.log(err)
                res.status(401).json({message: `Failed To Find stories For: ${user.id}`})
            })
        } else{
            res.status(401).json({message: `Failed To Find User With ID: ${req.params.id} `})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get Users stories'})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users.remove(id)
        .then(deleted => {
            if(deleted) {
                res.json({ removed: deleted})
            } else {
                res.status(404).json({
                    message: 'Could not find user with that ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to delete user'
            });
        });
});

router.post('/:id/stories', (req, res) => {
    const storyData = req.body;
    const {id} = req.params;

    users.findById(id)
        .then(user => {
            if(user) {
                stories.addStory(storyData, id)
                    .then(story => {
                        res.status(201).json(story);
                    })
            } else {
                res.status(404).json({
                    message: 'Could not find user with given ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add new story'
            });
        });
});


module.exports = router;