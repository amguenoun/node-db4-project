const db = require('../../data/dbConfig');

exports.getIngredientRecipes = (req, res) => {
    const ingredientId = req.params.id;

    db('recipes_ingredients as ri')
        .join('recipes as r', 'ri.r_id', 'r.id')
        .select('r.name', 'r.id')
        .where('ri.i_id', ingredientId)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: "Couldn't access database" })
        })
}