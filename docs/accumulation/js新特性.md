# JS新特性
## webWorker
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API" target="_blank">MDN参考链接</a>  
:::tip  进程和线程
进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）  
线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）
:::
**main.js**
@[code](@src/web worker/main.js)  
**worker.js**
@[code](@src/web worker/worker.js)