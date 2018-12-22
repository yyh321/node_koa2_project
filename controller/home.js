const HomeService = require('../service/home')

module.exports = {
    index: async(ctx, next) => {
        await ctx.render('home/index',{title: 'yyh123欢迎您'})
    },
    login: async(ctx, next) => {
        await ctx.render('home/login', {
            btnName: 'GoGoGo'
        })
    },
    register: async (ctx, next) => {
        let { name, password} = ctx.request.body
        let res = await HomeService.register(name, password)
        if(res.status == "-1") {
            await ctx.render('home/login',res.data)
        } else {
            ctx.state.title = '个人中心'
            await ctx.render('home/success',res.data)
        }
    }
}









