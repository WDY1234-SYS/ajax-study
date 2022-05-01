//导入express
const express = require('express')

//创建一个app对象
const app = express()

//绑定一个路由
app.get('/', (req, res) => {
    res.send('Home page')
})

//启动端口为8000的服务器
app.listen(8000, () => {
    console.log('http://127.0.0.1:8000');
})