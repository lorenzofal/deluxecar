var express = require('express');
var router = express.Router();


const controladorUsuario = require('../controllers/controladorUsuario');

/* GET users listing. */

router.get('/register', controladorUsuario.register)

router.get('/login',  controladorUsuario.login)
router.get('/profile', controladorUsuario.profile)
router.get('/profile-edit', controladorUsuario.profileEdit)
router.get('/product-add', controladorUsuario.addproduct)

module.exports = router;
