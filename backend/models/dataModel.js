const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Data', DataSchema);
