const lista = require("../data/autos.js");

module.exports = {
    index: (req, res) => {
        return res.render("profile", {lista})
    },

    edit: (req, res) => {
        return res.render("profile-edit")
    }
    
}