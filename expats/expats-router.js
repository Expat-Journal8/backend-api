const express = require('express');
const stories = require('./expats-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    stories.find()
        .then(story => {
            console.log(stories)
            res.json(story)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get story'
            });
        });
});

// router.get('/:id', (req, res) =>{
//     const { id } = req.params; 

//     stories.findStoriesById(id).then(story =>{
//         res.status(200).json(story)
//     })
//     .catch(err => {
//         res.status(500).json({message: 'Failed To Get Story With That ID'})
//     })
// })

router.post('/:id', (req,res) => {
    const storyData = req.body;
    
    stories.add(storyData)
        .then(ids => {
            res.status(201).json({created:ids[0]})
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create story'
            });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    stories.remove(id)
        .then(deleted => {
            if(deleted) {
                res.json({ removed: deleted})
            } else {
                res.status(404).json({
                    message: 'Could not find story with that ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to delete story'
            });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    stories.update(changes, id)
        .then(story => {
            if (story) {
                res.json({story});
            } else {
                res.status(400).json({
                    message: 'Could not find story with given ID'
                });
            }
        }) 
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update story'
            });
        });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;

    stories.findStories(id)
        .then(stories => {
            res.json(stories);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Problem with db', error:err
            });
        });
});

module.exports = router;