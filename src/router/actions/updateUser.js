const query = require('../../db/query')
const sql = require('../../db/sql')

module.exports = async(ctx) => {
    const params = ctx.request.body
    params.session = ctx.session
    if (params.userName) params.sort = ctx.pinyin(params.userName,{style:ctx.pinyin.STYLE_FIRST_LETTER}).join('').toLocaleUpperCase()
    console.log(params.sort)
    console.log(sql('updateUser', params))
    ctx.body = ctx.webCode.SUCCESS()
}