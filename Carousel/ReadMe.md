#一个简单的轮播插件
 [一个例子](https://hungryyang.github.io/Plugins/Carousel/index.html)
###使用方法：
1.写出轮播结构
```
<div class="carousel carousel1">
	<ul class="img-ct">
		<li><a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/26.jpg"></a></li>
		<li><a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/25.jpg"></a></li>
		<li><a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/24.jpg"></a></li>
		<li><a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/23.jpg"></a></li>
	</ul>
	<a href="#" class="pre arrow"><</a>
	<a href="#" class="next arrow">></a>
</div>
```
2.引用样式
```
<link rel="stylesheet" href="./css/style.css">
```
3.引用js
```
<script type="text/javascript" src="./js/libs/jquery.js"></script>
<script type="text/javascript" src="./js/carousel.js"></script>
```

###调用方法
```
Carousel.init($('.carousel'))
```
