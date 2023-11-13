const express = require('express')
const router = express.Router()

//在这里挂载对应的路由
router.get('/get',(req,res)=>{
    //通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    res.send({
        status : 0, //0 处理成功   1 处理失败
        msg: 'GET请求成功！',
        data: query
    })
})

//定义 POST 接口
router.post('/post',(req,res)=>{
    //通过 req.body 获取请求体中包含的 uel-encoded 格式的数据
    const body = req.body
    //调用 res.send() 方法， 向客户端响应数据
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })
})

//定义 DELETE 接口
router.delete('/delete',(req,res)=>{
    res.send({
        status: 0,
        msg: 'DELETE请求成功！',
    })
})

module.exports = router