const express = require('express');
const router = express.Router();
const cakesController = require('../controllers/cakesController')
// Import the cakesController

// Define the routes
router.get('/', cakesController.getCakes);
router.get('/:cakeId', cakesController.getCake);

module.exports = router;
