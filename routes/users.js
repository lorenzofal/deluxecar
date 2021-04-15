var express = require('express');
var router = express.Router();


const controladorUsuario = require('../controllers/ControladorUsuario');

/* GET users listing. */

router.get("/registro", controladorUsuario.register)
router.get("/login",  controladorUsuario.logIn)
module.exports = router;
