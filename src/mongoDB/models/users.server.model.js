const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  account: { unique: true,require: true,type: String },
  password: { require: true,type: String },
  mobile: { type:String },
  userName: { type:String },
  userNameRole: { type:String },
  age: { type: Number, default: 18 },
  nativePlace: { type:String },
  github: { type:String },
  useSkill: { type:String },
  status: { type: Number, default: 1 },
  role: { type: Number, default: 2 },
  remark: { type:String },
  createTime: { type: Date, default: Date.now }
})
module.exports = mongoose.model('User',UserSchema);