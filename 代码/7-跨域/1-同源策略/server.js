const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    //响应一个页面
    res.sendFile(__dirname + '/index.html')
})

//同源策略
app.get('/data', (req, res) => {
    res.send('用户数据')
})

app.listen(9000, () => {
    console.log('http://127.0.0.1:9000/home');
})