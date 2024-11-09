app.get('/custom-report', async (req, res) => {
    const { startDate, endDate } = req.query;

    const reportData = await UserBehavior.aggregate([
        { $match: { timestamp: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
        { $group: { _id: '$utmSource', total: { $sum: 1 } } },
        { $sort: { total: -1 } },
    ]);

    res.send(reportData);
});
