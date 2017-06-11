const Router = require('koa-router')
const timeout = require('./actions/timeout')
const register = require('./actions/register')
const login = require('./actions/login.js')
const updateUser = require('./actions/updateUser.js')
const userList = require('./actions/userList')
const upload = require('./actions/upload')
const router = new Router()

router.post('/login', login)
router.post('/updateUser', timeout, updateUser)
router.post('/register', register)
router.all('/userList', timeout, upload)
router.post('/upload', upload)

module.exports = app => {
    app.use(router.routes()).use(router.allowedMethods());
}