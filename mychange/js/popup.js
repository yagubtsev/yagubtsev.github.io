$(document).ready(function(){
	// popup

	$('#reg').click(function(){
		$('.registration').show(300);
		$('#reg-form').show(300);
		$('#vhod-form').hide()
	});

	$('#vhod').click(function(){
		$('.registration').show(300);
		$('#vhod-form').show(300);
		$('#reg-form').hide()
	});

	$('.close').click(function(){
		$('.registration').hide(300);
	});
});