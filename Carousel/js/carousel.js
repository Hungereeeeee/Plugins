function Carousel($carousel){
	this.$carousel=$carousel;
	var $ct=this.$ct=$carousel.find('.img-ct');
	this.$pre=$carousel.find('.pre');
	this.$next=$carousel.find('.next');
	this.imgWidth=$ct.find('li').width();
	this.imgSize=$ct.find('li').size();

	$ct.css('width',this.imgWidth*this.imgSize);
	this.bind();
}

Carousel.prototype = {

bind: function(){
	var _this = this;
	this.$pre.on('click', function(){
		_this.showPre();
	});
	this.$next.on('click', function(){
		_this.showNext();
	});
},

showPre: function(){
	this.$ct.prepend(this.$ct.children().last());
	this.$ct.css('left', 0-this.imgWidth);
	this.$ct.animate({'left': 0});
},

showNext: function(){
	var $ct = this.$ct;
	$ct.animate({'left': 0-this.imgWidth},function(){
		$ct.append($ct.children().first());
		$ct.css('left', 0);
	});
}
};

