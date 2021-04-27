const autos = require("../data/autos")

module.exports = {
    register : (req, res) =>{
         res.render("register")
        
    },
    login:(req, res)=> {
        return res.render("login")
       
    },
    profile:(req,res)=>{
        res.render("profile", {autos : autos.productos})

    },

   profileEdit: (req,res)=>{
       return res.render('profileEdit')

   },
  
  addproduct: (req,res)=>{
      res.render("productAdd")
  }
  
}
