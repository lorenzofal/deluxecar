module.exports = {
    register : (req, res) =>{
        //return res.render("registro")
        return res.send("Hola")
    },
    login:(req, res)=> {
        return res.render("login")
        return res.send("Hola")
    },

}
