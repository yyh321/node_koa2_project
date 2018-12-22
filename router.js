const HomeController = require('./controller/home')
const router = require('koa-router')()

module.exports = (app) => {
    router.get('/',HomeController.index)
    router.get('/home', HomeController.home)
    router.get('/home/:id/:name', HomeController.homeParams)
    router.get('/user', HomeController.login)
    router.post('/user/register', HomeController.register)


    app.use(router.routes())
        .use(router.allowedMethods())
}








