const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User",
    },

}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Review', reviewSchema);
