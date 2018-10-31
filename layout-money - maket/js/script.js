$(document).ready(function(){

	// Бургер меню
	$('.circle-menu').click(function(){
		$(this).toggleClass('circle-menu__active');
		$('.menu-2').toggleClass('db');
	});

	//Резервы валют
	$('.open-reserv').click(function(){
		$(this).toggleClass('open-reserv__active');
		$('.reserv').removeClass('wow').removeClass('fadeInLeft');
		$('.reserv').toggleClass('db');
	});
});

// Плавная прокрутка вниз
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 1150);
    return false;
};