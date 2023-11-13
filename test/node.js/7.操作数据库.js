const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '226011',
    database: 'my_db_01'
})

//测试 mysql 模块能否正常工作    'select 1'没有实质作用，为了测试链接
// db.query('select 1',(err,result)=>{
//     // mysql 工作期间报错了
//     if(err) return console.log(err.message)
//     // 你呢公共成功执行sql语句
//     console.log(result);
// })

// 1.0 查询users表中数据
// db.query('select * from users',(err,results)=>{
//     // 查询失败
//     if(err) return console.log(err.message)
//     // 查询成功
//     // 注意： 如果执行的是 select 查询语句，则执行的结果是数组
//     console.log(results);
// })

// 2.0 插入数据
// 1. 要插入到表中的数据对象
// const user = { username: 'Spider-Man', password: 'pcc321'}
// // 2. 待执行的 SQL 语句 ，英文 ? 表示占位符
// const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)'
// // 3. 使用数组的形式，依次为 ? 占位符指定具体的值
// db.query(sqlStr,[user.username,user.password],(err,results)=>{
//     if(err) return console.log(err.message)
//     // 注意：如果执行的是 insert into 插入语句 ， 则 results 是一个对象
//     if(results.affectedRows === 1) console.log(results);  //插入成功
// })

// 2.1 插入数据的便捷方式
// const user = { username: 'Spider-Man2', password: 'pcc4321'}
// const sqlStr = 'INSERT INTO users SET ?'
// db.query(sqlStr,user,(err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1) console.log('插入成功');  
// })

// 3.0 更新数据
// 1. 要更新的数据对象
// const user = { id: 1, username: 'update-test', password: '321321'}
// const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?'
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return console.log(err.message)
//     // 注意：如果执行的是 UPDATE 更新语句 ， 则 results 是一个对象
//     if(results.affectedRows === 1) console.log('更新成功'); 
// })

// 3.1 更新数据的便捷方式
// 1. 要更新的数据对象
// const user = { id: 1, username: 'update-test2', password: '321321'}
// const sqlStr = 'UPDATE users SET ? WHERE id = ?'
// db.query(sqlStr,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message)
//     // 注意：如果执行的是 UPDATE 更新语句 ， 则 results 是一个对象
//     if(results.affectedRows === 1) console.log('更新成功'); 
// })

// 4.0 删除数据
const sqlStr = 'delete from users where id = ?'
db.query(sqlStr,1,(err,results)=>{
    if(err) return console.log(err.message);
    // 注意：执行 DELETE 语句后 ，results 也是一个对象
    if(results.affectedRows === 1){
        console.log('删除成功');
    }
})

