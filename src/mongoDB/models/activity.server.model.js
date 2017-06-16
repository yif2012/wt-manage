const mongoose = require('mongoose');
const ActivitySchema = new mongoose.Schema({
  activityTitle: { unique: true,require: true,type: String }, // 活动标题
  theme: { require: true,type: String }, // 分享主题
  content: { require: true,type: String }, // 分享内容
  sharePeople: { type:String, default: "" }, // 分享人
  participant: { type:Array, default: [] }, // 参加人
  address: { type: String, default: "" }, // 分享地址
  status: { type: Number, default: 1 },
  remark: { type:String, default: "" },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: "" }
})
module.exports = mongoose.model('Activity',ActivitySchema);