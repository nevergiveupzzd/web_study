const zzd = require('./zzd-tools/index')

//格式化时间功能测试
const dtstr = zzd.dateFormat(new Date())
console.log(dtstr);

//转义 HTML 字符功能测试
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = zzd.htmlEscape(htmlStr)
console.log(str);
//还原 HTML 字符功能测试
const str2 = zzd.htmlUnEscape(str)
console.log(str2);