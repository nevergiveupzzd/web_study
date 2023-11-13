## 安装
```
npm install zzd-tools
```

## 导入
```js
const zzd = require('zzd-tools')
```

## 格式化时间
```js
//调用 dateFormat 对时间进行格式化
const dtstr = zzd.dateFormat(new Date())
//结果  2023-09-06 17:42:27
console.log(dtstr)
```

## 转义HTML中的特殊字符
```js
//定义待转换 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用 htmlEscape 方法进行转换
const str = zzd.htmlEscape(htmlStr)
//转换结果  &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原HTML中的特殊字符
```js
//待还原的 HTML 字符串
const str2 = zzd.htmlUnEscape(str)
//输出结果  <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 图片预览
```html
<!-- 需引入jQuery -->
<!-- 在HTML中添加 -->
<div id="outerdiv" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:2;width:100%;height:100%;display:none;">
      <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src="" />
      </div>
    </div>
```
```js
// 需为图片添加 pic 类
$(".pic").click(function(){  
  var _this = $(this);//将当前的pimg元素作为_this传入函数  
  //调用imgShow方法
  imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
});
```

## 开源协议
ISC