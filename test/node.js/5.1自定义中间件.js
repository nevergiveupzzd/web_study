const express = require('express')

const app = express()


//1.导入封装的中间件
const customBodyParser = require('./5.2自定义中间件模块化拆分')
//2.将自定义中间件函数 注册为全局中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen(80,function(){
    console.log('Express server runing at http://127.0.0.1');
})