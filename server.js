require('dotenv').config();
const express = require('express');

const server = express();

const recipesRouter = require('./resources/recipes/recipesRouter');
const ingredientsRouter = require('./resources/ingredients/ingredientsRouter');

server.use(express.json());
server.use('/recipes', recipesRouter)
server.use('/ingredients', ingredientsRouter)

module.exports = server;