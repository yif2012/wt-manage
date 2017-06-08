const mongoose = require('mongoose')

module.exports = async(ctx) => {
  const User = mongoose.model('User')
  const res = await User.find((err, res) => res)
  if (res.length) {
    let list = []
    for (let i = 0; i < res.length; i++) {
      let obj = {
        id: res[i]._id,
        mobile: res[i].mobile,
        userName: res[i].userName
      }
      list.push(obj)
    }
    console.log(list)
    ctx.body = ctx.webCode.SUCCESS({list})
  } else {
    ctx.body = ctx.webCode.EXCEPTION(err)
  }
}