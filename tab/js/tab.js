var tabControl = (function(){
	function _TabControl($el){
		this.$el=$el;
		this.bind();
	}
	_TabControl.prototype.bind=function(){
		var _this=this;
		console.log(this.$el)
		this.$el.on('click','li',function(){
			$(this).parent().find('li').removeClass('active');
			$(this).addClass('active');
			var index=$(this).index();
			// 	console.log($(this).parents('mod-tab').find('.panel').eq(0))
			$(this).parents('.mod-tab').find('.panel').removeClass('active');
			$(this).parents('.mod-tab').find('.panel').eq(index).addClass('active');
		})
	}
	return {
		init:function($ct){
			$ct.each(function(index,node){
				new _TabControl($(node))
			})
		}
	}
})()