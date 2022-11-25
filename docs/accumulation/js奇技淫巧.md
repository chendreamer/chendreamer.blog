# JS奇技淫巧
+ 判断对象是否有某属性
```
  let obj = {
      c : {
        a : () => {
            console.log(234);
        }
      }
  }

  obj?.c?.a?.();
```