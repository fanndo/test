const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares');


const { getProduct  } = require('../controllers/products');

const router = Router();

/**
 * @swagger
 * /products/:
 *   get:
 *     description: Get!
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
    res.json({ok:true, msg: 'Hello World!'})
});

// Obtener una categoria por id - publico
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     description: Get!
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id category
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    // validarCampos,
], getProduct );

module.exports = router;
