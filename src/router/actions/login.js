// const query = require('../../db/query')
// const sql = require('../../db/sql')
const mongoose = require('mongoose')
const crypto = require('crypto')

module.exports = async(ctx) => {
  try {
    let { account, password } = ctx.request.body
    if (!account) return ctx.body = ctx.webCode.USERNAMENULL()
    if (!password) return ctx.body = ctx.webCode.PASSWORDNULL()
    const md5 = crypto.createHash('md5')
    password = md5.update(password).digest('hex')
    const User = mongoose.model('User')
    await User.findOne({account,password}).then(res => {
      console.log(res)
      if (res) {
        const userInfo = {
          id: res._id,
          account: res.account,
          role: res.role
        }
        ctx.session = userInfo
        ctx.body = ctx.webCode.SUCCESS(userInfo)
      } else {
        ctx.body = ctx.webCode.USERORPWDERROR()
      }
    })
    // await query(sql('login', { account, password, ctx })).then(res => {
    //   if (res.length) {
    //     const userInfo = res[0]
    //     userInfo.createTime = ctx.moment(userInfo.createTime).format('YYYY-MM-DD HH:mm:ss')
    //     userInfo.updateTime = userInfo.updateTime && ctx.moment(userInfo.updateTime).format('YYYY-MM-DD HH:mm:ss')
    //     delete userInfo.password
    //     ctx.session = userInfo
    //     ctx.body = ctx.webCode.SUCCESS(userInfo)
    //   } else {
    //     ctx.body = ctx.webCode.USERORPWDERROR()
    //   }
    // })
  } catch (e) {
    ctx.body = ctx.webCode.EXCEPTION(e)
  }
}