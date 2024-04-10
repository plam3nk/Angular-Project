const reviewModel = require('../models/reviewModel');

function getReviews(req, res, next) {
    reviewModel.find()
        .populate('userId')
        .then(reviews => res.json(reviews))
        .catch(next);
}

function getReview(req, res, next) {
    const { reviewId } = req.params;

    reviewModel.findById(reviewId)
        .populate('userId')
        .then(review => res.json(review))
        .catch(next);
}

function createReview(req, res, next) {
    const { comment, rating } = req.body;
    const { _id: userId } = req.user;

    reviewModel.create({ comment, userId, rating })
        .then(review => {
            res.status(200).json(review);
        })
        .catch(next);
}

function deleteReview(req, res, next) {
    const reviewId = req.params.reviewId; // Assuming the review ID is passed as a URL parameter
    const userId = req.user._id; // Assuming the user ID is obtained from the authenticated user

    // Assuming you have a method in your reviewModel to find and delete a review by its ID and user ID
    reviewModel.findOneAndDelete({ _id: reviewId, userId })
        .then(deletedReview => {
            if (!deletedReview) {
                // If the review with the given ID and user ID doesn't exist, send a 404 Not Found response
                return res.status(404).json({ message: 'Review not found' });
            }
            // Send a success response with status 200 and the deleted review
            res.status(200).json({ message: 'Review deleted successfully', deletedReview });
        })
        .catch(next); 
}


module.exports = {
    getReview,
    getReviews,
    createReview,
    deleteReview,
}
