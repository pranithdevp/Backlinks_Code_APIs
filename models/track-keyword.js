const KeywordTracking = require('./models/KeywordTracking');

app.post('/track-keyword', async (req, res) => {
    const { keyword, impressions, clicks, conversions } = req.body;
    const keywordData = new KeywordTracking({
        keyword,
        impressions,
        clicks,
        conversions,
        timestamp: new Date()
    });

    try {
        await keywordData.save();
        res.status(201).send('Keyword data tracked');
    } catch (error) {
        res.status(500).send('Error tracking keyword: ' + error.message);
    }
});
