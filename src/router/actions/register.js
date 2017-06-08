const mongoose = require('mongoose');
const crypto = require('crypto')

module.exports = async(ctx) => {
  try{
    let { account, password, userName } = ctx.request.body
    if (!account) return ctx.body = ctx.webCode.USERNAMENULL()
    if (!password) return ctx.body = ctx.webCode.PASSWORDNULL()
    const User = mongoose.model('User');
    const res = await User.find({ account: account })
    if (res.length) return ctx.body = ctx.webCode.USEREXIST()
    const md5 = crypto.createHash('md5')
    password = md5.update(password).digest('hex')
    const user = new User({
      account: account,
      password: password,
      userName: userName,
      userNameSort: ctx.pinyin(userName, {style:ctx.pinyin.STYLE_FIRST_LETTER}).join('').toLocaleUpperCase()
    })
    user.save();
    ctx.body = ctx.webCode.SUCCESS()
  } catch (e) {
    console.log(e)
  }
}