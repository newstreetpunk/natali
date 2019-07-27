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

	var html = $('.title-page, .double-title-page').html();
    // doing the transformation (adding the span) with a regular expression
    html = html.replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2");
    // update your text
    $('.title-page, .double-title-page').html(html);

    // or in one line:
    //$('.title-page, .double-title-page').html( ('.title-page, .double-title-page').html().replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2") );

	
});
