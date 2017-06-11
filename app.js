const Koa = require('koa')
const co = require('co')
const koaBody = require('koa-body')
const static = require('koa-static')
const session = require('koa-session2')
const moment = require('moment')
const pinyin = require('pinyin')

const router = require('./src/router')
const webCode = require('./src/assets/webCode')
const mongoose = require('./src/mongoDB')

const app = new Koa()
const CONFIG = {key: 'SESSIONID',maxAge: 1000 * 60 * 60}

app.use(session(CONFIG))
app.use((ctx, next) => {
  console.log(ctx.session)
  ctx.pinyin = pinyin
  ctx.webCode = webCode
  ctx.moment = moment
  ctx.dirname = __dirname
  return next()
})
app.use(koaBody({
  formidable:{uploadDir: './upload'},
  multipart: true,
  urlencoded: true,
  formLimit:"5mb"
}))
app.use(static(__dirname + '/public/static'))
mongoose()
router(app)

app.listen(666, () => {
  console.log('server start in port 666');
})