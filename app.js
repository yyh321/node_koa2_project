const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

const app = new Koa()
//指定public目录为静态资源目录，用来存放js css images 等
app.use(staticFiles(path.resolve(__dirname,'./public')))

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig:{
        trimBlocks: true
    }
}))

app.use(bodyParser())
router(app)


app.listen(3000, ()=>{
    console.log('app is running!')
})



