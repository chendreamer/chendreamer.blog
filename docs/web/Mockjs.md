# Mockjs
安装一个node服务，基于express。
```sh
npm init
npm install express --save
npm install mockjs
```
配置参考手册：点<a href="http://mockjs.com/examples.html" target="_blank">这里</a>  
示例：  
```js
let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

app.use(function(req, res, next) { //允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/mode/DataOne',function(req, res){
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'mockTitle|1':['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
})

app.listen('8090', () => {
    console.log('监听端口 8090')
})
```
jquery下使用  
```js
<script src="http://mockjs.com/dist/mock.js"></script>

var fakeData = Mock.mock({   
			"userInfo|1-10": [{   //生成|num个如下格式名字的数据    
				"id|+1": 1,//数字从当前数开始后续依次加一
				"name": "@cname",//名字为随机中文名字
				"ago|18-28": 25,//年龄为18-28之间的随机数字
				"sex|1": ["男", "女"],//性别是数组中的一个，随机的
				"job|1": ["web", "UI", "python", "php"]   //工作是数组中的一个  
			}]  
		})

```