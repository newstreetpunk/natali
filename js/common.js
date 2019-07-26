$(function() {

	var main = function() {
		$('.menu-btn').click(function() {
			$('.info-block').css('left', '0px');
		});
	};

	$(document).ready(main);

	var rahul=0;
	$(window).click(function(e) {
		$('.info-block').css('left', '-370px');   
	});

	
});
