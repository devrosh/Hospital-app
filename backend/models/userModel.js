const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type: String, required: true},
  middleName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true, minlength: 6},
  repeatPassword: {type: String, required: true, minlength: 6},
  address1: {type: String, required: true},
  address2: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipCode: {type: Number, required: true},
  phoneNumber: {type: Number, required: true, minlength: 10},
  dateOfBirth: {type: Date, required: true},
});

const User = mongoose.model(User, userSchema);

module.exports = User;
