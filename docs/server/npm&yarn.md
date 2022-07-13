# npm&yarn
<a href="https://www.npmjs.com/" target="_blank">npm官网，可以找npm插件</a>  

## 常用命令
## package.json
### scripts
<a href="https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html" target="_blank">阮一峰日记参考</a>  
原理：  
&emsp;&emsp;每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。  
&emsp;&emsp;比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。  
&emsp;&emsp;这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。  

### require查找原理
+ 假设有一个文件路径为 /root/src/moduleA.js，包含了一个导入

var x = require("./moduleB"); 
Node.js以下面的顺序解析这个导入：
1. 检查/root/src/moduleB.js文件是否存在。
2. 检查/root/src/moduleB目录是否包含一个package.json文件，且package.json文件指定了一个"main"模块。 在我们的例子里，如果Node.js发现文件 /root/src/moduleB/package.json包含了{ "main": "lib/mainModule.js" }，那么Node.js会引用/root/src/moduleB/lib/mainModule.js。
3. 检查/root/src/moduleB目录是否包含一个index.js文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。   

+ 如果传给 require() 的模块标识符不是核心模块，并且不以 '/'、'../' 或 './' 开头，则 Node.js 从当前模块的目录开始，并添加 /node_modules，并尝试从该位置加载模块。 Node.js 不会将 node_modules 附加到已经以 node_modules 结尾的路径。

如果在那里找不到它，则它移动到父目录，依此类推，直到到达文件系统的根目录。

例如，如果 '/home/ry/projects/foo.js' 处的文件调用 require('bar.js')，则 Node.js 将按以下顺序查找以下位置：
```
/home/ry/projects/node_modules/bar.js
/home/ry/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js
```
这允许程序本地化它们的依赖项，这样它们就不会发生冲突。

&emsp;&emsp;通过在模块名称后包含路径后缀，可以要求与模块一起分发的特定文件或子模块。 例如，require('example-module/path/to/file') 将相对于 example-module 所在的位置解析 path/to/file。 后缀路径遵循相同的模块解析语义。


## 常见插件
### cross-env
cross-env能跨平台地设置及使用环境变量,只要在NODE_ENV前面加上cross-env标志，会根据当前系统类型帮你选择适当的指令给NODE_ENV赋值。  
windows:`SET NODE_ENV=production && webpack --config build/webpack.config.js`  
unix:`EXPORT NODE_ENV=production && webpack --config build/webpack.config.js`  
cross-env:`cross-env NODE_ENV=production webpack --config build/webpack.config.js`  
