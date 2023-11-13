import { checkPone,checkCode } from '../untils/check'


// document.querySelector('.btn').addEventListener('click',()=>{
//     const phone = document.querySelector('.login-form [name=mobile]').value
//     const code = document.querySelector('.login-form [name=code]').value

//     if(!checkPone(phone)){
//         console.log('手机号长度必须是11位');
//         return
//     }

//     if(!checkCode(code)){
//         console.log('验证码长度必须是6位');
//         return
//     }
//     console.log(('提交到服务器'));
// })

// 准备 CSS 代码 并引入到 js 中
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './index.less'
// JS 中本地图片资源用 import 方式（如果是网络图 http 地址，字符串可以直接写）
import imgObj from './assets/right.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)


import myAxios from '../untils/request'
import { myAlert } from '../untils/alert';
document.querySelector('.btn').addEventListener('click',()=>{
    const phone = document.querySelector('.login-form [name=mobile]').value
    const code = document.querySelector('.login-form [name=code]').value

    if(!checkPone(phone)){
        myAlert(false,'手机号长度必须是11位');
        return
    }

    if(!checkCode(code)){
        myAlert(false,'验证码长度必须是6位');
        return
    }
    
    myAxios({
        url: '/v1_0/authorizations',
        method: 'POST',
        data: {
            mobile: phone,
            code: code
        }
    }).then(res => {
        myAlert(true,'登录成功');
        localStorage.setItem('token',res.data.token)
        location.href = '../content/index.html'
    }).catch(error => {
        myAlert(false,error.response.data.message);
    })
})
// 前端—注入环境变量
// 需求：前端项目代码中，开发模式下打印语句生效，生产模式下打印语句失效
if(process.env.NODE_ENV === 'production'){
    console.log = function(){

    }
}
console.log('开发模式下好用,生产模式下失效');

console.warn('123');

import youAxios from '@/untils/request.js'
console.log(youAxios);

