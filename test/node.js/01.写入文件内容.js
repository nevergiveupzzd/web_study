// 1.导入fs文件系统模块
const fs = require('fs')

// 2.调用fs.writeFile()方法 写入文件内容
    // 参数1：文件存放路径
    // 参数2：写入的内容
    // 参数3：回调函数
fs.writeFile('./files/1.txt','abcd',function(err){
    // 2.1 文件写入成功 err值为null
    // 2.2 如果写入失败，err值为一个错误对象
    // console.log(err);
    if(err){
        return console.log('文件写入失败！'+ err.message);
    }
    console.log('文件写入成功');
})