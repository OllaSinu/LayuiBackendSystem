// 路由器

const express = require('express');

// 得到一个路由器
let router = express.Router();


// 导入相应的控制器
const CateController = require('../controller/CateController.js');

// 搭建后台管理访问系统
// router.get('/',(req,res)=>{
//     // 重定向到background，使两者都可以用
//     res.redirect('/background')
// })
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index.html');
})
// 栏目管理
router.get('/staticTables',CateController.staticTables)
// 文章管理
router.get('/adds',CateController.adds)
// 渲染出添加分类的页面
router.get('/catadd',CateController.cataddition)

// 获取分类数据的接口  =>staticTable 表格数据
router.get('/getCate',CateController.getCate)
// 删除指定分类staticTable 表格数据的其中一栏
router.post('/delCat',CateController.delCat)

// 添加分类页面点击提交接口
router.post('/postCat',CateController.postCat)

// 添加成功后，跳转到catindex接口
router.get('/catindex',CateController.catindex)

// 渲染出编辑分类的页面
router.get('/catedit',CateController.catedit)
// 获取单个分类数据的接口
router.get('/getOneCate',CateController.getOneCate)
// 编辑分类的接口
router.post('/updCate',CateController.updCate)

// 匹配失败的路由
router.all('*',CateController.all)


module.exports = router;