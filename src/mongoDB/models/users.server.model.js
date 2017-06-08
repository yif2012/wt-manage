const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  account: { unique: true,require: true,type: String },
  password: { require: true,type: String },
  mobile: { type:String, default: "" },
  userName: { type:String, default: "" },
  userNameRole: { type:String, default: "" },
  age: { type: Number, default: 18 },
  nativePlace: { type:String, default: "" },
  github: { type:String, default: "" },
  useSkill: { type:String, default: "" },
  status: { type: Number, default: 1 },
  role: { type: Number, default: 2 },
  remark: { type:String, default: "" },
  createTime: { type: Date, default: Date.now }
})
module.exports = mongoose.model('User',UserSchema);