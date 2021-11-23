# vue双向绑定的简单实现

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <!-- 原始html -->
        <div id="app">
            <p>姓名：{{user.name}}</p>
            <p>年龄：{{user.age}}</p>
            <p>{{msg}}</p>
            <input type="text" v-model="msg">
        </div>
    </body>

    <script type="text/javascript">
        var Observer = function(obj, parent) {
            this.data = obj;
            parent = parent || '';
            this.walk(obj, parent);
        }

        Observer.prototype.walk = function(obj, parent) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] == 'object') {//递归监听所有属性
                        new Observer(obj[key], parent + key + '.');
                    }
                    this.setPropewrty(key, obj[key], parent);
                }
            }
        }

        Observer.prototype.setPropewrty = function(key, value, parent) {
            parent = parent || '';
            //每个有data-vue-tag属性的值都要监听
            var selectorHtml = document.querySelectorAll('[data-vue-tag="' + parent + key + '"]');
            Object.defineProperty(this.data, key, {
                set: function(newValue) {
                    //属性值有变化时更新html元素内容
                    [].forEach.call(selectorHtml, function(el) {
                        value = el.textContent = newValue;
                    })
                },
                get: function() {
                    return value
                }
            });
        }

        //入口    
        var Vue = function(opt) {
            var _selector = opt.el;
            this.data = opt.data;
            var el = selectorQuery(_selector);
            var content = el.innerHTML.replace(/\{\{(.*)\}\}/g, markToken); // {{...}}文本转化一下
            el.innerHTML = content;
            var binding = new Observer(this.data);
            for (var i in opt.data) {
                if (typeof opt.data[i] == 'object') {
                    for (var key in opt.data[i]) {
                        binding.data[i][key] = opt.data[i][key];
                    }
                }
                binding.data[i] = opt.data[i];
            }

            var elInput = el.getElementsByTagName('input');
            [].forEach.call(elInput, function(el) {
                var viriable = el.getAttribute('v-model');
                if (viriable) {
                    el.value = binding.data[viriable];
                    el.addEventListener('input', function(e) {
                        //input有输入时更新data值，从而改变html元素内容
                        binding.data[viriable] = el.value;
                    })
                }
            });
        }

        function markToken(text, variable) {
            return '<span data-vue-tag="' + variable + '"></span>';
        }

        //获取被绑定元素
        function selectorQuery(str) {
            if (!str) return;
            var tag = str.substring(0, 1);
            var elStr = str.substring(1);
            switch (tag) {
                case '.':
                    return document.getElementsByClassName(elStr);
                    break;
                case '#':
                    return document.getElementById(elStr);
                    break;
                default:
                    return document.getElementsByTagName(str);
                    break;
            }
        }

        var app = new Vue({
            el: '#app',
            data: {
                msg: 'hello world',
                user: {
                    name: 'chen',
                    age: 30
                }
            }
        });
    </script>
</html>
```