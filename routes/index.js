const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);
router.get('/detail/:id', homeController.detail);
router.get('/searchResults', homeController.search);


module.exports = router;