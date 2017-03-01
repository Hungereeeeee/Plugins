#一个回到顶部的按钮插件
会生成一个按钮用来返回顶部
样式请自行设定
[一个例子](https://hungryyang.github.io/Plugins/goTop/index.html)
###使用方法
1.引用js文件
```
<script src="./js/libs/jquery.js"></script>
<script src="./js/goTop.js"></script>
```
2.调用
依次传入插入位置，所需要的id名称，所需类名，以及所需经过的距离
```
goTop.init($('.footer'),'goTop','aaaaa',2000)
```
=======
var scroll=new goTop($('.footer'))
```
