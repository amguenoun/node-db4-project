const db = require('../../data/dbConfig')

exports.getRecipes = (req, res) => {
    db('recipes').then(recipes => {
        res.json(recipes);
    })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' })
        })
}

exports.getShoppingList = (req, res) => {
    const recipeId = req.params.id;

    db('recipes_ingredients as r_i')
        .join('ingredients as i', 'i.id', '=', 'r_i.i_id')
        .select('i.id', 'r_i.quantity', 'i.name')
        .where('r_i.r_id', recipeId)
        .then(list => {
            if (list.length > 0)
                res.json(list);
            else res.status(400).json({ message: `A recipe with id: ${recipeId} doesn't exist` })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get shopping list for recipe' })
        })
}

exports.getInstructions = (req, res) => {
    const recipeId = req.params.id;

    db('recipes')
        .select('instructions')
        .where("id", recipeId)
        .then(recipes => {
            if (recipes.length > 0)
                res.json(recipes);
            else res.status(400).json({ message: `A recipe with id: ${recipeId} doesn't exist` })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe instructions' })
        })
}