require('dotenv').config();
const express = require('express');

const server = express();

const recipesRouter = require('./resources/recipes/recipesRouter');

server.use(express.json());
server.use('/recipes', recipesRouter)

module.exports = server;