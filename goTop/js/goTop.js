function goTop($node){
	this.ct=$node;
	this.target=$('<div id="goTop"><a href="#">回到顶部</a></div>');
	this.init();
}
goTop.prototype={
	init:function(){
		this.createEvent()
		this.bindEvent();
	},
	createEvent:function(){
		this.ct.append(this.target);
	},
	bindEvent:function(){
		var _this=this;
		$(window).on('scroll',function(){
			if($(window).scrollTop()>400){
				_this.target.show();
			}else{
				_this.target.hide();
			}
		})
		_this.target.on('click',function(){
			$(window).scrollTop(0);
		})
	}
}