const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const cakeSchema = new mongoose.Schema({
    cakeName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Cake', cakeSchema);
