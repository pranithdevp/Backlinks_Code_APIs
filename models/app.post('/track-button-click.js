app.post('/track-button-click', async (req, res) => {
    const { userId, elementId, pageUrl } = req.body;

    const buttonClick = new UserBehavior({
        userId,
        actionType: 'button_click',
        elementId,
        pageUrl,
        timestamp: new Date(),
    });

    try {
        await buttonClick.save();
        res.status(201).send('Button click tracked');
    } catch (error) {
        res.status(500).send('Error tracking button click: ' + error.message);
    }
});
