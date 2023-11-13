//?这是路由处理函数模块

//导入数据库操作模块
const db = require('../db/index')

//获取文章分类列表的处理函数
exports.getArticleCates = (req,res)=>{
    const sql = 'select * from ev_article_cate where is_delete = 0 order by id asc'
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        res.send({
            status:0,
            message: '获取文章分类数据成功！',
            data: results,
        })
    })

}

//新增文章分类的处理函数
exports.addArticleCates = (req,res)=>{
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        if(err) return res.cc(err)
        // 判断数据的 length
        // 1.分类名称 和 别名都被占用
        if(results.length === 2) return res.cc('分类名与别名被占用，请更换后重试！')
        // 2.分类名称 和 别名都被占用
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名与别名被占用，请更换后重试！')
        if(results.length === 1 && results[0].name === req.body.name) return res.cc('分类名被占用，请更换后重试！')
        if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
        //添加数据
        const sql = 'insert into ev_article_cate set ?'
        db.query(sql,req.body,(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败！')
            res.cc('新增文章分类成功！',1)
        })
    })
}

//删除文章分类的处理函数
exports.deleteCateById = (req,res)=>{
    const sql = 'update ev_article_cate set is_delete = 1 where id = ?'
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('删除文章分类失败！')
        res.cc('删除文章分类成功！', 0)
    })
}

//根据文章 ID 获取文章分类数据的处理函数
exports.getArtCateById = (req,res)=>{
    const sql = 'select * from ev_article_cate where id = ?'
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('获取文章分类数据失败！')
        res.cc({
            status: 0,
            message: '获取文章分类数据成功！',
            data: results[0],
        })
    })
}