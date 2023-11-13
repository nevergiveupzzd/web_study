//导入 node.js 内置的 querystring 模块
const qs = require('querystring')

//自定义解析表单数据的中间件
const bodyParser = (req,res,next)=>{
    //定义中间件具体的业务逻辑
    //1.定义 str 字符串，存储客户端发来的请求数据
    let str = ''
    //2.监听 req 的 data 事件
    req.on('data',(chunk)=>{
        str += chunk
    })
    //3.监听 req 的 end 事件
    req.on('end',()=>{
        //str 中存放的是完整的请求体数据
        // console.log(str)
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

module.exports = bodyParser