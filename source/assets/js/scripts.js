//= require "jquery-1.8.3.min"
//= require "jquery.easing-1.3.pack"

// hover fade
$('a img, .fade').hover(
	function(){
		$(this).stop().fadeTo(200, 0.6);
	},
	function(){
		$(this).stop().fadeTo(200, 1.0);
	});

	// rollover
	$(".rollover").mouseover(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	}).mouseout(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
	}).each(function(){
		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	});

	// scroll
	var topBtn = $('.pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
