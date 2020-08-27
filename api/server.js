const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const auth = require('../auth/auth-middleware.js');
const storiesRouter = require('../expats/expats-router.js');
const photosRouter = require('../expats/photos-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', auth, usersRouter);
server.use('/api/stories', auth, storiesRouter);
server.use('/api/photos', auth, photosRouter);




server.get('/', (req, res) => {
    res.json({
        api: 'expats up'
    });
});

module.exports = server;