let ControladorUsuario = {
    index: (req, res) =>{
        return res.render("registro")
    },
    logIn:(req, res)=> {
        return res.render("LogIn")
    },
}

module.exports = ControladorUsuario