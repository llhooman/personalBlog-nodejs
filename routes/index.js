const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');
const aboutPageController = require('../controllers/aboutPageController');
const contactPageController = require('../controllers/contactPageController');

router.get('/', homePageController);
router.get('/about', aboutPageController);
router.get('/contact', contactPageController);

module.exports = router;
