//导入express
const express = require('express')
const { json } = require('express/lib/response')

//创建一个app对象
const app = express()

//创建路由规则
app.get('/server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    res.send('Hello AJAX')
})

//IE缓存
app.get('/ie', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    res.send('Hello AJAX -ie5')
})

//延时响应
app.get('/delay', (req, res) => {
    //设置响应头 设置允许跨域
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应体
        res.send('超时异常')
    }, 3000)
})

//可以接收任何请求
app.all('/server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    res.send('Hello AJAX POST')
})

//json
app.all('/json-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name: 'auguti'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    res.send(str)
})

//axios服务
app.all('/axios-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name: 'atguigu'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    res.send(str)
})

//fetch 服务
app.all('/fetch-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name: 'atguigu'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    res.send(str)
})

//JSONP 服务
app.all('/jsonp-server', (req, res) => {
    // res.send('console.log("hello jsonp")')
    const data = {
        name: '尚硅谷123'
    }
    const str = JSON.stringify(data)
    res.end(`handle(${str})`)
})

//用户名检测是否存在
app.all('/check-username', (req, res) => {

    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    const str = JSON.stringify(data)
    res.end(`handle(${str})`)
})

//jquery-jsonp-server
app.all('/jquery-jsonp-server', (req, res) => {

    const data = {
        name: '尚硅谷',
        city: ['北京', '上海', '深圳']
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //接收callback 参数
    let cb = req.query.callback
    //返回结果
    res.end(`${cb}(${str})`)
})

//cors
app.all('/cors-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //设置请求方法
    res.setHeader('Access-Control-Allow-Methods', '*')
    //设置响应体
    res.send('Hello CORS')
})



//监听端口启动服务
app.listen(8000, () => {
    console.log('http://127.0.0.1:8000');
})