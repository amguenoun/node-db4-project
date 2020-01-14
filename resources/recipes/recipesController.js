const db = require('../../data/dbConfig')

exports.getRecipes = (req, res) => {
    db('recipes').then(recipes => {
        res.json(recipes);
    })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' })
        })
}