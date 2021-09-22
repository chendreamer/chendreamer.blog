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


