const mongoose = require('mongoose');

const keywordTrackingSchema = new mongoose.Schema({
    keyword: String,
    impressions: Number,
    clicks: Number,
    conversions: Number,
    timestamp: Date,
});

module.exports = mongoose.model('KeywordTracking', keywordTrackingSchema);
