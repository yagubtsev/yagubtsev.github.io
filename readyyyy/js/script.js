$(document).ready(function() {
	$('.searthth').hide();
	$('.r-view').hide();
	$('.r-view2').hide();
	$('.choose-razv').hide();
	$('.choose-body2').hide();
	$('.fdfsa').hide();

	// SLider	
	$('.slider-wrapper').slick();

	// Burger-menu open/close
	$('.burger-menu').click(function() {
		$('.overflow').removeClass('menu-dont__active');
		$('.overflow').addClass('menu__active');
	});

	$('.burger-menu-over').click(function() {
		$('.overflow').addClass('menu-dont__active');
		$('.overflow').removeClass('menu__active');
	});

	// Чекбоксы

	$('.view').click(function() {
		$(this).hide();
		$('.r-view').show();
	});

	$('.r-view').click(function() {
		$(this).hide();
		$('.view').show();
	});

	$('.view2').click(function() {
		$(this).hide();
		$('.r-view2').show();
	});

	$('.r-view2').click(function() {
		$(this).hide();
		$('.view2').show();
	});

	// Второй слайдер
	$('.slider-wrapper2').slick();


	// Развёртка менюшки рыбы

	$('.choose-body').click(function() {
		$('.choose-razv').show(300);
		$('.choose-body2').show();
		$(this).hide();
	});

	$('.choose-body2').click(function() {
		$('.choose-razv').hide(300);
		$('.choose-body2').hide();
		$('.choose-body').show();
	})

	// Развёртка поиска

	$('.search-click').click(function() {
		$('.searthth').show(300);
		$(this).hide();
		$('.fdfsa').show();
	});

	$('.fdfsa').click(function() {
		$('.search-click').show();
		$('.searthth').hide(300);
		$(this).hide();
	});
});