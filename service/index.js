const Koa = require('koa');//引入koa
const app = new Koa();

const mongoose = require('mongoose')  //引入mongoose
const Router = require('koa-router') //引入koa-router
const bodyParser = require('koa-bodyparser')//引入koa-bodyparser中间件。
const cors = require('koa2-cors') //引入koa2-cors解决跨域问题

app.use(cors()) // 注册koa2-cors中间件
app.use(bodyParser());//注册koa-bodyparser中间件

let user = require('./appApi/user.js') //引入我们的user.js模块
let goods = require('./appApi/goods.js')

//装载所有子路由
let router = new Router();
router.use('/user',user.routes()) 
router.use('/goods',goods.routes()) 
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//引入connect
const {connect , initSchemas} = require('./database/init.js')

//立即执行函数
;(async () =>{
    await connect() //连接数据库
    initSchemas() //初始化数据库
    // const User = mongoose.model('User')
    // let oneUser = new User({userName:'czk',password:'123456'})
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let  users = await  User.findOne({})
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')
})()

app.use(async(ctx) => {
  ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
  console.log('server is staring at port 3000')
})