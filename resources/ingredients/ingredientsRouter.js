const express = require('express')

const ingredientsController = require('./ingredientsController');

const router = express.Router()

router.get('/recipes/:id', ingredientsController.getIngredientRecipes)

router.get('/:id', ingredientsController.getIngredientById)

module.exports = router