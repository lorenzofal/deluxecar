var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
let ControladorUsuario = require("../controllers/ControladorUsuario")
router.get("/registro", ControladorUsuario.index)
router.get("/login",  ControladorUsuario.logIn)
module.exports = router;
