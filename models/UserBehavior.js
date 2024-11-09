// models/UserBehavior.js
const mongoose = require('mongoose');

const userBehaviorSchema = new mongoose.Schema({
    userId: String,            // Optional, if you want to track by user
    actionType: String,        // e.g., 'page_view', 'button_click', 'form_submission'
    elementId: String,         // e.g., the ID of the button or form clicked
    pageUrl: String,           // URL where the action occurred
    timestamp: { type: Date, default: Date.now },
    additionalData: Object,    // Optional, for any additional information you might want to capture
});

module.exports = mongoose.model('UserBehavior', userBehaviorSchema);
