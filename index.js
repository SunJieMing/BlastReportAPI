var express    = require('express')
  , bodyParser = require('body-parser')
  , Mongoose   = require('mongoose')
  , morgan     = require('morgan')
  , port       = process.env.PORT || 8000
  , app        = express()
  ;

Mongoose.connect('mongodb://localhost/blastreport');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', require('./routes/blast_reports'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Content-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.listen(port, function() {
  console.log('App listening on port ' + port);
});
