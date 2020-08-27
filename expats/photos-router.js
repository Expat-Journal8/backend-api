const express = require('express');
const photos = require('./photos-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    photos.find()
        .then(photo => {
            res.json(photo)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get photos'
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    photos.findById(id)
        .then(photos => {
           const photo = photos[0];
           if (photo) {
               res.json(photo)
           } else {
               res.status(404).json({
                   message: 'Cannot find photo by that id'
               })
           }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error getting photo'
            });
        });
});

router.post('/:id', (req,res) => {
    const photoData = req.body;
    
    photos.add(photoData)
        .then(photoData => {
            res.status(201).json(photoData)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create photo'
            });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    photos.remove(id)
        .then(deleted => {
            if(deleted) {
                res.json({ removed: deleted})
            } else {
                res.status(404).json({
                    message: 'Could not find photo with that ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to delete photo'
            });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    photos.update(changes, id)
        .then(photo => {
            if (photo) {
                res.json({photo});
            } else {
                res.status(400).json({
                    message: 'Could not find photo with given ID'
                });
            }
        }) 
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update photo'
            });
        });
});


module.exports = router