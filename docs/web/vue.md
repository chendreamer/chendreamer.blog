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
+ State：存放数据
+ Getter：可以认为是 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
+ Mutation:更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。 mutation 必须是同步函数。
+ Action:Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
+ Module:每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。
```
//简单实现
var store = {
                debug: true,
                state: {
                    message: 'Hello!'
                },
                setMessageAction(newValue) {
                    if (this.debug) console.log('setMessageAction triggered with', newValue)
                    this.state.message = newValue
                },
                clearMessageAction() {
                    if (this.debug) console.log('clearMessageAction triggered')
                    this.state.message = ''
                }
            }
```

## vue优化速度
+ 开启gzip。  
  1. 代码中加入配置命令
  2. 服务器允许访问.gz文件。
  ```
  //request headers(http) 
  Accept-Encoding: gzip, deflate
  //https支持br压缩
  Accept-Encoding: gzip, deflate, br

  //response headers
  Content-Encoding: gzip
  ```
+ 按需加载

## flow
   <a href="https://flow.org/en/docs/types/" target="_blank">Flow 官方文档</a>  
   Flow 是 facebook 出品的 JavaScript 静态类型检查工具。Vue.js 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码。  
   ```js
   /*@flow*/

  class Bar {
    x: string;           // x 是字符串
    y: string | number;  // y 可以是字符串或者数字
    z: boolean;

    constructor(x: string, y: string | number) {
      this.x = x
      this.y = y
      this.z = false
    }
  }

  var bar: Bar = new Bar('hello', 4)

  var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
    a: 'hello',
    b: 11,
    c: ['hello', 'world'],
    d: new Bar('hello', 3)
  }

  //若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。
  var foo: ?string = null

//若想任意类型 T 可以为undefined,不可为null，只需类似如下写成 ?: T 的格式即可。
  var foo?: string = undefined
   ```

## 组合式 API
<a href="https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E5%8F%82%E6%95%B0" target="_blank">官网文档</a>  
### ref
ref 为我们的值创建了一个响应式引用。ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值。
### setup
setup 选项是一个接收 props 和 context 的函数
### setup 内注册生命周期钩子
组合式 API 上的生命周期钩子与选项式 API 的名称相同，但前缀为 on：即 mounted 看起来会像 onMounted。
### watch
```js
import { ref, watch } from 'vue'

const counter = ref(0)
watch(counter, (newValue, oldValue) => {
  console.log('The new counter value is: ' + counter.value)
})
```
### computed
```js
import { ref, computed } from 'vue'

const counter = ref(0)
const twiceTheCounter = computed(() => counter.value * 2)

counter.value++
console.log(counter.value) // 1
console.log(twiceTheCounter.value) // 2
```


