const mongoose = require('mongoose')

module.exports = async(ctx) => {
  const id = ctx.request.body.id || ctx.session.id
  const User = mongoose.model('User')
  await User.findOne({_id: id}).then(res => {
    console.log(res)
  })
}