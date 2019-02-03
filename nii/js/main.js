$(document).ready(function() {
	// Меню бургер
	$('.circle-menu').click(function(){
		$(this).toggleClass('circle-menu__active');
		$('.menu').toggleClass('db');
	});
	// Ширина экрана
	if ($(window).width() < 800) {
  		$('.menu').hide();
	}
});