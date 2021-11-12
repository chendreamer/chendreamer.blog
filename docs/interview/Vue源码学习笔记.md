# Vue源码学习笔记
## 响应式原理
![blockchain](./image/vue_code/响应式原理.png "响应式原理")  
当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 **Object.defineProperty** 把这些 property 全部转为 **getter/setter**。  
每个组件实例都对应一个 **watcher** 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。  
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">Object.defineProperty使用说明</a>  

## 生命周期
![blockchain](./image/vue_code/lifecycle.png "lifecycle")  

## 观察者
![blockchain](./image/vue_code/observer.jpg "observer")
可以看到上边这张图，不难看出最主要的部分就是Observer模块和Directive模块。Observer负责做数据层面的响应式及依赖收集。而Directive即compiler模块下的部分，负责做指令解析和DOM渲染。搞懂这两部分，就搞懂了Vue的一个框架思想。  

