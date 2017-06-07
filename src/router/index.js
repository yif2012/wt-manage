const Router = require('koa-router')
const login = require('./actions/login.js')
const timeout = require('./actions/timeout')
const updateUser = require('./actions/updateUser.js')
const register = require('./actions/register')
const router = new Router()

router.post('/login', login)
router.post('/updateUser', timeout, updateUser)
router.post('/register', register)

module.exports = app => {
    app.use(router.routes()).use(router.allowedMethods());
}