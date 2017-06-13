const mongoose = require('mongoose')

module.exports = async(ctx) => {
  try {
    const id = ctx.request.body.id || ctx.session.id
    const User = mongoose.model('User')
    await User.findOne({_id: id}).then(res => {
      const user = {
        id: res._id,
        userName: res.userName,
        mobile: res.mobile,
        useSkill: res.useSkill,
        github: res.github,
        nativePlace: res.nativePlace,
        age: res.age,
        role: res.role,
        remark: res.remark
      }
      ctx.body = ctx.webCode.SUCCESS(user)
    })
  } catch (e) {
    ctx.body = ctx.webCode.EXCEPTION(e)
  }
}