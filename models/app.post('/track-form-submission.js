app.post('/track-form-submission', async (req, res) => {
    const { userId, elementId, pageUrl, formData } = req.body;

    const formSubmission = new UserBehavior({
        userId,
        actionType: 'form_submission',
        elementId,
        pageUrl,
        additionalData: formData,
        timestamp: new Date(),
    });

    try {
        await formSubmission.save();
        res.status(201).send('Form submission tracked');
    } catch (error) {
        res.status(500).send('Error tracking form submission: ' + error.message);
    }
});
