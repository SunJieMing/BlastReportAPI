var express    = require('express')
  , reportCtrl = require('../controllers/report_ctrl')
  , router     = express.Router()
  ;

router.get('/reports', reportCtrl.getReports);
router.post('/report', reportCtrl.saveReport);
router.get('/test', reportCtrl.test);

module.exports = router;
