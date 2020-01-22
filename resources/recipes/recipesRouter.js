
const express = require('express');

const recipesController = require('./recipesController');

const router = express.Router();

router.get('/all', recipesController.getRecipes)

router.get('/:id', recipesController.getRecipeById)

router.get('/list/:id', recipesController.getShoppingList)

router.get('/instructions/:id', recipesController.getInstructions)

module.exports = router