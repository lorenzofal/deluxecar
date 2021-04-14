const autos = require('../data/autos')
module.exports = {
    index: (req, res)=>{
        return res.render('index', {title: 'Pagina de Inicio', autos: autos.lista })
    }
}