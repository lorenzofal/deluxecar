const { json } = require('express')
const db = require('../database/models')
const op = db.Sequelize.Op;
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
 
 
 
 
 
















