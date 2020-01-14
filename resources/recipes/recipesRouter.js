
const express = require('express');

const recipesController = require('./recipesController');

const router = express.Router();

router.get('/all', recipesController.getRecipes)

module.exports = router