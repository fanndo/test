const { response } = require('express');


const getCategories = async(req, res = response ) => {

    const { id } = req.params;
    // const producto = await Producto.findById( id )
    //                         .populate('usuario', 'nombre')
    //                         .populate('categoria', 'nombre');

    res.json( {id, ok:'categoria'} );

}

module.exports = {
    getCategories
}