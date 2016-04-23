var Report = require('../models/report');

module.exports = {
  saveReport: function(req, res) {
    var newReport = new Report(req.body);
    newReport.save(function(err) {
      if (err) {
        console.log('>>>saveReport err', err);
        return res.send(err.errmsg);
      }
      res.send('user successfully created');
    });
  },
  getReports: function(req, res) {
    console.log('getReports');
    Report.find({}).exec(function(err, reports) {
      if (err) {
        console.log('>>>getReports err', err);
        return res.send(err);
      }
      res.status(200).send(reports);
    });
  },
  test: function(req, res) {
    res.send('Hello World!');
  }
};
