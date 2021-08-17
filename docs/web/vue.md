# Vue
:::tip
用于积累vue知识
:::
## vue常见安装命令
```js
yarn add vue-router
yarn add vuex
yarn global add @vue/cli
yarn add element-ui
yarn add sass-loader
yarn add sass
```
## vue常见写法
+ 子组件向父组件传值
```js
子：this.$emit('func', value);//func:父组件接收变化的接口。   value：传递的值
父：@func="function" //命名一个函数接受子组件传值 
```
+ 所有属性绑定都是`:disbaled="tip" tip:false`

## vuex
+State：存放数据
+Getter：可以认为是 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
+Mutation:更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。 mutation 必须是同步函数。
+Action:Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
+Module:每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

## vue优化速度
+ 开启gzip。1.代码中加入配置命令，2.服务器允许访问.gz文件。
+ 按需加载