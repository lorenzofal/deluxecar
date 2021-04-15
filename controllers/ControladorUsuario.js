module.exports = {
    register : (req, res) =>{
        //return res.render("registro")
        return res.send("Hola")
    },
    logIn:(req, res)=> {
        return res.render("LogIn")
    },
}
