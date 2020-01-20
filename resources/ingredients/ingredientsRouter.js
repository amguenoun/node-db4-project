const express = require('express')

const ingredientsController = require('./ingredientsController');

const router = express.Router()

router.get('/recipes/:id', ingredientsController.getIngredientRecipes)

module.exports = router