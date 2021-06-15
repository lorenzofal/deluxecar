const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        db.Producto.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(respuesta=>{
            return res.render("index", {respuesta})
        })
        
    }
}
 
 
 
 
 
















