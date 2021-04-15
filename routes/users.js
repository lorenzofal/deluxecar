var express = require('express');
var router = express.Router();


const controladorUsuario = require('../controllers/controladorUsuario');

/* GET users listing. */

router.get('/register', controladorUsuario.register)
//router.get('/login',  controladorUsuario.login)
module.exports = router;
