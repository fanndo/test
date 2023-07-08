const { response } = require('express');


const getProduct = async(req, res = response ) => {

    const { id } = req.params;
    // const producto = await Producto.findById( id )
    //                         .populate('usuario', 'nombre')
    //                         .populate('categoria', 'nombre');

    res.json( {id} );

}

module.exports = {
    getProduct
}