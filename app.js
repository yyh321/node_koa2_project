const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')

const app = new Koa()

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



