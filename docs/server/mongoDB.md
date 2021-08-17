# mongoDB
## 概念
+ 数据库  
多个集合组成数据库  
一个MongoDB实例可承载多个数据库，互相之间彼此独立  
开发中通常将一个应用的所有数据存放到同一个数据库中  
磁盘上，MongoDB将不同数据库存放在不同文件中  
+ 集合
集合就是一组文档，与关系数据库的表可类比  
集合是无模式的。MongoDB对模式不做强制要求，有开发者灵活把握  
+ 文档
多个键及其关联的值有序地放置在一起就是文档  
单键值文档{“userName“：”BBS11“}  
多键值文档{ "_id" : ObjectId("58097dfe7e6d64baca852729"), "name" : "test", "add" : "china" }  
文档中的值不仅可以是字符串，也可以是其他数据类型（或者嵌入其他文档）  

## 操作
<a href="https://www.yiibai.com/mongodb/mongodb_quick_guide.html" target="_blank">详细看这里</a>  
+ 创建数据库 `use DATABASE`
+ 查看当前数据库 `db`
+ 查看所有数据库 `show dbs`
+ 插入文档 `db.DATABASE.insert({"name":"cainiao"})`
+ 更新文档 `db.DATABASE.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})`
+ 删除当前选中的数据库 `db.dropDatabase()`
+ 创建集合 `db.createCollection(name, options)`
+ 查看已有集合 `show collections`
+ 查询集合 `db.COLLECTION_NAME.find()`   
+ 如果显示结果是格式化的，那么可以用pretty() 方法 `db.COLLECTION_NAME.find().pretty()`
+ 插入集合 `db.COLLECTION_NAME.insert(document)`
+ 删除集合 `db.COLLECTION_NAME.drop()`
+ 从集合中删除文档 `db.mycol.remove({'title':'MongoDB Overview'})`
