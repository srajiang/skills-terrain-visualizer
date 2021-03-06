const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = User.mongoose.models('User', UserSchema);