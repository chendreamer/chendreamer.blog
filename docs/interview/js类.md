# JS类
## Ajax的原生写法
```
function ajax1() {
    //创建一个 XHR 对象
    let oAjax = window.XMLHttpRequest ? (new XMLHttpRequest()) : (new window.ActiveXobject('Microsoft.XMLHTTP'));
    //返回一个函数，这是函数柯里化操作，不用每次调用 ajax 都判断浏览器环境
    //但是会占用更多的内存，因为总是会保存外部函数的作用域
    return function(url, fnSucc, fnFaild) {
        //只要 XHR 对象的 readyState 属性的值发生改变，就触发这个事件
        oAjax.onreadystatechange = function() {
        // readyState 属性是 0-4 的值，当为 4 时，表示已经接收到全部响应数据，并可以在客户端使用
        if(oAjax.readyState === 4) {
            //响应的 HTTP 状态
            let s = oAjax.status;
            if(s === 200 || s === 206 || s === 304) {
            //将响应主体被返回的文本作为参数传给这个函数，并执行这个函数
            if(fnSucc) fnSucc(oAjax.responseText);
            }else {
            if(fnFaild) fnFaild(oAjax.status);
            }
        }
        };
        //启动一个请求，准备发送
        oAjax.open('GET', url, true);
        //发送请求
        oAjax.send(null);
    }
}
```
## CommonJs,AMD, CMD, UMD
+ CommonJS  
node.js的模块系统，就是参照CommonJS规范实现的。
+ AMD  
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。  
主要有两个Javascript库实现了AMD规范：require.js和curl.js。  
+ CMD  
CMD (Common Module Definition), 是seajs推崇的规范，CMD则是依赖就近，用的时候再require。
AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。  
AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。  
+ UMD  
UMD是AMD和CommonJS的糅合。AMD模块以浏览器第一的原则发展，异步加载模块。CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。这迫使人们又想出另一个更通用的模式UMD （Universal Module Definition）。希望解决跨平台的解决方案。  
UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。  

