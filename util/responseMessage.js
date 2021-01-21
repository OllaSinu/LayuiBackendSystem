const responseMessage = {
    all:{errcode:10004,message:"请求错误"},
    argsfail: {errcode:10001,'message':"参数有误"},
    delsucc: {errcode:0,'message':"删除成功"},
    delfail: {errcode:10002,'message':"原因未知，请重新尝试"},
    addsucc: {errcode:0,message:'添加成功'},
    addfail:{errcode:10005,message:'添加失败'},
    exception: {errcode:10003,'message':"服务器繁忙，请稍后再试"}
}



module.exports = responseMessage;