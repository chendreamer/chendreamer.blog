# ES6
<a href="http://es6.ruanyifeng.com/#docs/intro" target="_blank">ES6入门教程</a>  
## let, const  
let则实际上为js新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
```js
let name = 'zach'

while (true) {
    let name = 'obama'
    console.log(name)  //obama
    break
}

console.log(name)  //zach
```
const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。  
当我们尝试去改变用const声明的常量时，浏览器就会报错。  
const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug。
```js
const monent = require('moment')
```
## class, extends, super
```js
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello
```
上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。  

Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。  

super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。  

ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。  

P.S 如果你写react的话，就会发现以上三个东西在最新版React中出现得很多。创建的每个component都是一个继承React.Component的类。

## arrow function
```js
function(i){ return i + 1; } //ES5
(i) => i + 1 //ES6
----------------------------------
function(x, y) { 
    x++;
    y--;
    return x + y;
}
(x, y) => {x++; y--; return x+y}
```
当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。  
并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
## destructuring
更多参考点<a href="https://developer.mozilla.org/zh-CN/docs/Web/js/Reference/Operators/Destructuring_assignment" target="_blank">这里</a>
```js
es5:
let cat = 'ken'
let dog = 'lili'
let zoo = {cat: cat, dog: dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

es6:
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}
----------------------------------
let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2
```
## default, rest
```js
es5:
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()

es6:
function animal(type = 'cat'){
    console.log(type)
}
animal()
----------------------------------
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]
```
## import export
```js
//index.js
import animal from './content'

//content.js
export default 'A cat'
---------------------------------
export default 'A cat'    
export function say(){
    return 'Hello!'
}    
export const type = 'dog' 
---------------------------------
import animal, { say, type } from './content'  
let says = say()
console.log(`The ${type} says ${says} to ${animal}`)  
//The dog says Hello to A cat
```
## promise
```js
var myFirstPromise = new Promise(function(resolve, reject) {
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    var a = Math.random();
    setTimeout(function() {
        console.log(a);
        if (a > 0.5) {
            resolve("成功!"); //代码正常执行！
        } else if (a > 0.25) {
            reject("因为我大于0.25小于0.5");//异常
        } else {
            reject("因为我小于0.25"); //异常
        }
    }, 1000);
});
//捕捉结果
myFirstPromise.then(function(successMessage) {
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
}, function(failMessage) {
    //failMessage的值是上面调用reject(...)方法传入的值.
    //failMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("oh no! 失败了");
});
// 记录失败原因
myFirstPromise.catch(function(reason) {
    console.log(reason);
})
```
