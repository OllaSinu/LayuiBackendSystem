const express = require('express');
const app = express();
const path = require('path')
let cors = require('cors');


// 设置跨域
app.use(cors())

// // 允许跨域请求
// app.use('/api',function(request,response,next){
//     response.setHeader('Access-Control-Allow-Origin','*')
//     next()  
// })

// 托管静态资源
app.use('/public',express.static(path.join(__dirname,'public')))
// 上传图片路径的中间件
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

// 引用模板引擎两个模块
const artTemplate = require('art-template'); 
const express_template = require('express-art-template');

// 配置express框架模板引擎为art-template  
//配置模板的路径
app.set('views', __dirname + '/views/');
//设置express_template模板引擎的静态文件扩展名为.html
app.engine('html', express_template); 
//使用模板引擎扩展名为html
app.set('view engine', 'html'); 

// 获取post请求参数中间件
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 导入路由模块
const router = require('./router/router.js')
const apiRouter = require('./router/apiRouter.js')

// 引入session会话技术
let session = require('express-session');
// 初始化session,定义session一些配置
let options = {
    name:"SESSIONID", // 待会写入到cookie中标识
    secret: "FGVH$#E%&", // 用来加密会话，防止篡改。
    cookie: {
        httpOnly: true,
        secure: false, // false-http(默认), true-https
        maxAge:60000*12, // session在cookies存活24分钟，
        // 再次访问，时间重置为24分钟， 24分钟内只要不访问则会失效
    }
};
// 引用前台路由（要在session之前使用，防止重定向）
app.use('/api',apiRouter);
app.use( session(options) )

// 在进入到路由匹配函数之前，要进行验证权限
app.use(function(req,res,next){
    // 1.获取当前访问路由
    let path = req.path.toLowerCase();
    // 2. 定义放行的路由，即不需要权限验证
    let noCheckAuth = ['/login','/signin','/logout']
    if(noCheckAuth.includes(path)){
        // 需要放行,不做任何限制
        next();
    }else{
        // 不在放行之外，需要验证权限（session）
        // addArt
        if(req.session.userInfo){
            // 有权限，可以继续操作
            next()
        }else{
            res.redirect('/login')
        }
    }
});

// 使用路由中间件 req.body
app.use(router)


app.listen(4000,_=>{
    console.log('服务器已启动 port 4000');
})