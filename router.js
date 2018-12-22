const HomeController = require('./controller/home')
const router = require('koa-router')()

module.exports = (app) => {
    router.get('/',HomeController.index)
    router.get('/user', HomeController.login)
    router.post('/user/register', HomeController.register)


    app.use(router.routes())
        .use(router.allowedMethods())
}








