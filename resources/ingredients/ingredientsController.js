const db = require('../../data/dbConfig');

exports.getIngredientRecipes = (req, res) => {
    const ingredientId = req.params.id;

    db('recipes_ingredients as ri')
        .join('recipes as r', 'ri.r_id', 'r.id')
        .select('r.name', 'r.id')
        .where('ri.i_id', ingredientId)
        .then(recipe => {
            if (recipe.length > 0)
                res.json(recipe);
            else res.status(400).json({ message: `An ingredient with id: ${ingredientId} doesn't exist` })
        })
        .catch(err => {
            res.status(500).json({ message: "Couldn't access database" })
        })
}

exports.getIngredientById = async (req, res) => {
    const ingredientId = req.params.id
    try {
        const [ingredient] = await db('ingredients').where('id', ingredientId)
        if (ingredient) {
            res.status(200).json(ingredient)
        }
        else {
            res.status(400).json({ message: 'Id does not exits' })
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Could not access db' })
    }
}