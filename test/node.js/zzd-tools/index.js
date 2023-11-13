//包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')
const img = require('./src/imgShow')
console.log(date);

//向外暴露需要的成员
module.exports = {
    ...date,
    ...escape,
    ...img
}
console.log(module.exports);