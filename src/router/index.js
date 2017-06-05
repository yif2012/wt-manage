const Router = require('koa-router')
const login = require('./actions/login.js')
const updateUser = require('./actions/updateUser.js')
const router = new Router()

router.post('/login', login)
router.post('/updateUser', updateUser)

module.exports = app => {
    app.use(router.routes()).use(router.allowedMethods());
}