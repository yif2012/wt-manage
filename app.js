const Koa = require('koa')
const co = require('co')
const koaBody = require('koa-body')
const static = require('koa-static')
const session = require('koa-session2')
const moment = require('moment')
const pinyin = require('pinyin')

const router = require('./src/router')
const webCode = require('./src/assets/webCode')
const mongoose = require('./src/mongoDB/config/mongoose')

const app = new Koa()
const CONFIG = {key: 'SESSIONID',maxAge: 1000 * 60 * 60}

app.use(session(CONFIG))
app.use((ctx, next) => {
  console.log(ctx.session)
  ctx.pinyin = pinyin
  ctx.webCode = webCode
  ctx.moment = moment
  return next()
})
app.use(koaBody({}))
app.use(static(__dirname + '/static'))
mongoose()
router(app)

app.listen(666, () => {
  console.log('server start in port 666');
})