const autos = require('../data/autos')
module.exports = {
    index: (req, res)=>{
        return res.render('index', {title: 'NUESTROS PRODUCTOS', autos: autos.lista })
    }, 
    profile: (req, res)=>{
        return res.render('profile', {title: 'Mis Productos', autos: autos.lista })
    }, 
    detail: (req, res)=>{
        let id = req.params.id;
        for(let i = 0; i < autos.lista.length; i++){
            if(autos.lista[i].id == id){
                return res.render('detail', {auto : autos.lista[i]});
            }
        }
    }
}