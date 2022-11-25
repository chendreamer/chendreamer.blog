# Create React App开发到部署
## 安装Create React App
安装 `npx create-react-app my-app`

## craco
用来修改CRA的webpack等配置。  
<a href="https://github.com/gsoft-inc/craco" target="_blank">官方说明</a>  
```js
//配置跨域
module.exports = {
    devServer: {
            port: 8008,
            open:true,
            proxy:{
                '/api': {
                    target: 'http://127.0.0.1:8888',
                    changeOrigin: true,
                },
            }
        }
}
```

## nginx
最好用cmd执行命令，不会有Powershell报错。
+ 查看nginx的版本号：nginx -v
+ 启动nginx：start nginx
+ 快速停止或关闭nginx：nginx -s stop
+ 正常停止或关闭nginx：nginx -s quit
+ 配置文件nginx.conf修改重装载命令：nginx -s reload
```js
//修改真实地址 ,功能和webpack的proxy一样
location ~ /api {
            proxy_pass http://127.0.0.1:8888;
        }
```

## server
@[code](@src/create react app/server.js)

## 验证
页面放到nginx下的html下。直接访问即可。
```js
 server {
        listen       9999;
        server_name  localhost;

         #允许跨域请求的域，* 代表所有
        add_header 'Access-Control-Allow-Origin' *;
        #允许带上cookie请求
        add_header 'Access-Control-Allow-Credentials' 'true';
        #允许请求的方法，比如 GET/POST/PUT/DELETE
        add_header 'Access-Control-Allow-Methods' *;
        #允许请求的header
        add_header 'Access-Control-Allow-Headers' *;
        
        location / {
                root   html/wms;
                index  index.html index.htm;
            }
    }
```
