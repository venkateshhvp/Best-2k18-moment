var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var share = new Schema({
  _id: String,
  userId: String,
  name: String,
  from: String,
  message: String,
  createdOn: {
    type: Date,
    "default": Date.now
  }
},
  {
  strict: false
});
module.exports = mongoose.model('share', share);
