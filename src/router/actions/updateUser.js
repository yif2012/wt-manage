const query = require('../../db/query')
const sql = require('../../db/sql')

module.exports = async(ctx) => {
    const params = ctx.request.body
    params.userInfo = ctx.session.userInfo
    console.log(sql('updateUser', params))
}