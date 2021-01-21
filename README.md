##  项目说明文件

* 基于`express` 搭建
* 后台ui使用`layui`
* 使用技术 `layui+jQuery+async/ await`
* 配合模板引擎构成页面结构



##  运行项目

1.安装项目的所有依赖项

2.打开`data`导入`SQL`文件，再修改`config/db.json`数据库配置信息

3.执行`npm run serve` 启动项目



##  文件夹说明

`config/db.json`  : 数据库配置

`data`  : sql文件

`controller`:  控制器，内含多个控制器，用于控制各个模块

`public`:前台引用文件

`util`:后台引用文件