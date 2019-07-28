$(function() {
	var bb = $('.info-block');
	var main = function() {
		$('.menu-btn').click(function() {
			if(bb.css('left') == '0px'){
				$('.info-block').css('left', '-370px');
			}else{
				$('.info-block').css('left', '0px');
			}
			
		});
	};

	$(document).ready(main);

	var rahul=0;
	$(window).click(function(e) {
		$('.info-block').css('left', '-370px');   
	});

	var winH = $(window).height();
		$('.info-block').css('height', winH + 'px');

	$('li:not(.main-menu ul li)').html(function(i, html){
		var li = $(this).text();
		var b = li.substring(0,2);
		return html.replace(b, '<span class="wh">$&</span>');
	});

	$('textarea').focus(function(){
		$(this).text('');
	});

	
});
