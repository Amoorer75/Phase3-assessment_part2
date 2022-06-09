const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'))
router.post('/lambRecipes', controllers.createItem)
router.get('/lambRecipes', controllers.getAllItems)
router.get('/lambRecipes/:id', controllers.getItemById)
router.put('/lambRecipes/:id', controllers.updateItem)
router.delete('/lambRecipes/:id', controllers.deleteItem)
router.get('/countries', controllers.getAllCountry)
router.get('/countries/:id', controllers.getCountryById)

module.exports = router; 