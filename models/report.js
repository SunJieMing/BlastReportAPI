var Mongoose = require('mongoose')
  , Schema   = Mongoose.Schema
  ;

var ReportSchema = new Schema({
  blastingFirm: {
    type: String
  },
  shotReportNumber: {
    type: Number
  },
  customer: {
    type: String
  },
  shotLocation: {
    type: String
  },
  materialShot: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: Date
  },
  totalBCY: {
    type: Number
  },
  shotReportNumber: {
    type: Number
  },
  weatherDescription: {
    type: String
  },
  windSpeed: {
    type: Number
  },
  temp: {
    type: Number
  },
  burden: {
    type: Number
  },
  spacing: {
    type: Number
  },
  avgHoleDepth: {
    type: Number
  },
  holeDiameter: {
    type: Number
  },
  numHoles: {
    type: Number
  },
  stemming: {
    type: Number
  },
  productDescriptionIS: {
    type: String
  },
  codeDateIS: {
    type: String
  },
  quantityIS: {
    type: Number
  },
  productDescriptionPE: {
    type: String
  },
  codeDatePE: {
    type: String
  },
  quantityPE: {
    type: Number
  },
  anfo: {
    type: Number
  },
  anPrills: {
    type: Number
  },
  fuelOil: {
    type: Number
  },
  oxidizerSolution: {
    type: Number
  },
  otherBulk: {
    type: Number
  },
  totalLbsShot: {
    type: Number
  },
  powderFactor: {
    type: Number
  },
  nearestStructureDistance: {
    type: Number
  },
  nearestStructureDirection: {
    type: String
  },
  maxLbsHole: {
    type: Number
  },
  maxLbs8ms: {
    type: Number
  },
  maxHoles8ms: {
    type: Number
  },
  otherInfo: {
    type: String
  },
  blasterInCharge: {
    type: String
  },
  firstCrewMember: {
    type: String
  },
  firstCrewHours: {
    type: Number
  },
  secondCrewMember: {
    type: String
  },
  secondCrewHours: {
    type: Number
  },
  thirdCrewMember: {
    type: String
  },
  thirdCrewHours: {
    type: Number
  },
  signature: {
    type: String
  },
  licenseNo: {
    type: String
  }
});

module.exports = Mongoose.model('Report', ReportSchema);
