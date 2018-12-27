var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
  _id: String,
  userId: String,
  name: String,
  createdOn: {
    type: Date,
    "default": Date.now
  }
},
  {
  strict: false
});
module.exports = mongoose.model('user', user);
