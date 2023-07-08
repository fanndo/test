const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares');

const { getCategories  } = require('../controllers/categories');

const router = Router();

router.get('/', (req, res) => {
    res.json({ok:true, msg: 'Hello World!'})
});

// Obtener una categoria por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], getCategories );

module.exports = router;
