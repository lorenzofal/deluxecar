module.exports = {
    register : function(req, res) {
         res.render("register")
        
    },
    login:(req, res)=> {
        return res.render("login")
        return res.send("Hola")
    },
    profile:(req,res)=>{
        res.render("profile")
    },

   profileEdit: function(req,res) {
       return res.render('profile-edit')

   },
  
  addproduct: (req,res)=>{
      res.render("product-add")
  }
  
  

   

}
