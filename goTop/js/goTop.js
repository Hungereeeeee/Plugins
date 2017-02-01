var goTop=(function(){
	function _goTop($node,idName,className,dis){
		this.ct=$node;
		this.target=$('<div id="'+idName+'" class="'+className+'"><a href="#">回到顶部</a></div>');
		this.distance=dis;
		this.init();
	}
	_goTop.prototype.init=function(){
		this.createEvent()
		this.bindEvent();
	}
	_goTop.prototype.createEvent=function(){
		this.ct.append(this.target);
	}
	_goTop.prototype.bindEvent=function(){
		var _this=this;
		$(window).on('scroll',function(){
			if($(window).scrollTop()>_this.distance){
				_this.target.show();
			}else{
				_this.target.hide();
			}
		})
		_this.target.on('click',function(){
			$(window).scrollTop(0);
		})
	}

	return {
		init:function($ct,idName,className,dis){
			new _goTop($ct,idName,className,dis)
		}
	}
})()