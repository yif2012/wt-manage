const mongoose = require('mongoose')

module.exports = async(ctx) => {
  try {
    const params = ctx.request.body
    const User = mongoose.model('User')
    const obj = {}
    if (params.userName) {
      obj.userName = params.userName
      obj.userNameSort = ctx.pinyin(params.userName,{style:ctx.pinyin.STYLE_FIRST_LETTER}).join('').toLocaleUpperCase()
    }
    if (params.mobile) obj.mobile = params.mobile
    if (params.age) obj.age = params.age
    if (params.nativePlace) obj.nativePlace = params.nativePlace
    if (params.github) obj.github = params.github
    if (params.useSkill) obj.useSkill = params.useSkill
    if (params.status) obj.status = params.status
    if (params.role) obj.role = params.role
    if (params.remark) obj.remark = params.remark
    obj.updateTime = new Date
    await User.findByIdAndUpdate({_id:ctx.session.id},{$set:obj}, err => {
      if (err) {
        ctx.body = ctx.webCode.EXCEPTION(err)
      } else {
        ctx.body = ctx.webCode.SUCCESS()
      }
    })
  } catch (e) {
    ctx.body = ctx.webCode.EXCEPTION(e)
  }
}