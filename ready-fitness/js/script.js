$(document).ready(function() {
	$('.slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
	});

	$('.slider2').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
	});
})