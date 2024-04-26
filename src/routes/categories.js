const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares');

const { getCategories  } = require('../controllers/categories');

const router = Router();

/**
 * @swagger
 * /categories/:
 *   get:
 *     description: Get!
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
    res.json({ok:true, msg: 'Hello categories!'})
});

// Obtener una categoria por id - publico
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     description: Get!
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get(':id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], getCategories );

module.exports = router;
