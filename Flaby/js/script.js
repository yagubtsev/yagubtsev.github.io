$(document).ready(function(){
	// Slider
 	 $('.slider').slick({
 		dots: true,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		adaptiveHeight: true
	});

 	 // Circle-menu

 	 $('.circle-menu').click(function(){
 	 	$(this).toggleClass('active');
 	 	$('.menu').toggleClass('db');
 	 });
});