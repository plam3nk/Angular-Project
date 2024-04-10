const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const reviewController = require('../controllers/reviewController');

// middleware that is specific to this router

router.get('/', reviewController.getReviews);
router.post('/', auth(), reviewController.createReview);

router.get('/:reviewId', reviewController.getReview);
router.delete('/:reviewId/', auth(), reviewController.deleteReview);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router