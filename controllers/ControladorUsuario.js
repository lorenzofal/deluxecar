module.exports = {
    register : (req, res) =>{
         res.render("register")
        
    },
    login:(req, res)=> {
        return res.render("login")
        return res.send("Hola")
    },
    profile:(req,res)=>{
        res.render("profile")
    }

    

}
