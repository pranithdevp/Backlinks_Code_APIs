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

a) Endpoint to Track Page Views

module.exports = mongoose.model('UserBehavior', userBehaviorSchema);


const UserBehavior = require('./models/UserBehavior');

app.post('/track-page-view', async (req, res) => {
    const { userId, pageUrl } = req.body;
    
    const pageView = new UserBehavior({
        userId,
        actionType: 'page_view',
        pageUrl,
        timestamp: new Date(),
    });

    try {
        await pageView.save();
        res.status(201).send('Page view tracked');
    } catch (error) {
        res.status(500).send('Error tracking page view: ' + error.message);
    }
});
