# markdown使用参考文档
## 标题
在想要设置为标题的文字前面加#来表示  
一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。
:::tip
一般在#后跟个空格再写文字才能达到标题的效果。
:::
:::warning
普通文字换行是在后面加两个空格。
:::
:::danger
这是一条危险警告
:::
```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
## 字体
+ 加粗  
要加粗的文字左右分别用两个*号包起来
  
+ 斜体  
要倾斜的文字左右分别用一个*号包起来
  
+ 加粗斜体  
要倾斜和加粗的文字左右分别用三个*号包起来
  
+ 删除线  
要加删除线的文字左右分别用两个~~号包起来
```md
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```
## 引用
在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>，n个...  
`>引用段落`
## 分割线
三个或者三个以上的 - 或者 * 都可以。
```md
---
***
```
## 列表
+ 无序列表  
无序列表用 - + * 任何一种都可以  
:::warning
-+*跟内容之间都要有一个空格
:::
+ 有序列表  
数字加点
:::warning
序号跟内容之间要有空格
:::
+ 列表嵌套  
上一级和下一级之间敲三个空格即可
```md
- 列表内容
+ 列表内容
* 列表内容

1. 列表内容
2. 列表内容
3. 列表内容
```

## 表格
```md
|表头|表头|表头|
|-   |:-: |-: |    //表头分割线。文字默认居左两边加,表示文字居中右边加,表示文字居右
|内容|内容|内容|
|内容|内容|内容|
```
## 代码
+ 单行代码  
代码之间分别用一个反引号包起来
+ 代码块  
代码之间分别用三个反引号包起来，且两边的反引号单独占一行
```md
`代码内容`

\```js/md/sh/html/css/sql/...
  代码...
  代码...
  代码...
\```

//直接导入代码文件
@[code](@src/xx.js)
```
@[code](@src/demo.js)
在 Prism 的网站上查看 <a href="https://prismjs.com/#languages-list" target="_blank">合法的语言列表</a>  

## 内置组件
```
+ VuePress - <Badge type="tip" text="v2" vertical="top" />
+ VuePress - <Badge type="warning" text="v2" vertical="middle" />
+ VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```
+ VuePress - <Badge type="tip" text="v2" vertical="top" />
+ VuePress - <Badge type="warning" text="v2" vertical="middle" />
+ VuePress - <Badge type="danger" text="v2" vertical="bottom" />


## 图片
支持网络地址，相对地址，base64。  
  
![blockchain](./image/1.png "qukuailian")
`![blockchain](./image/1.png "qukuailian")`
## 超链接
<a href="https://www.baidu.com" target="_blank">百度搜索</a>  
`<a href="https://www.baidu.com" target="_blank">百度搜索</a>`  

<a href="../server/node.md" target="_blank">文档内链接</a>  
`<a href="../server/xx.md" target="_blank">node</a>`  
