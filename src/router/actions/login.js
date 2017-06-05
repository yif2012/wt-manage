const query = require('../../db/query')
const sql = require('../../db/sql')
const crypto = require('crypto')

module.exports = async(ctx) => {
  try {
    let { account, password } = ctx.request.body
    if (!account) return ctx.body = ctx.webCode.USERNAMENULL()
    if (!password) return ctx.body = ctx.webCode.PASSWORDNULL()
    const md5 = crypto.createHash('md5')
    password = md5.update(password).digest('hex')
    await query(sql('login', { account, password, ctx })).then(res => {
      if (res.length) {
        const userInfo = res[0]
        userInfo.createTime = ctx.moment(userInfo.createTime).format('YYYY-MM-DD HH:mm:ss')
        userInfo.updateTime = userInfo.updateTime && ctx.moment(userInfo.updateTime).format('YYYY-MM-DD HH:mm:ss')
        delete userInfo.password
        ctx.session = {
          userInfo
        }
        ctx.body = ctx.webCode.SUCCESS(userInfo)
      } else {
        ctx.body = ctx.webCode.USERORPWDERROR()
      }
    })
  } catch (e) {
    ctx.body = ctx.webCode.EXCEPTION(e)
  }
}