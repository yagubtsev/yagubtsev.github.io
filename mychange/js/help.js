$(document).ready(function(){
	// Развёртка листа вопросов

	$('#name_01').click(function(){
		$('#quest_1').toggleClass('db');
		$(this).toggleClass('quest-active');
	});

	$('#name_02').click(function(){
		$('#quest_2').toggleClass('db');
		$(this).toggleClass('quest-active');
	});

	$('#name_03').click(function(){
		$('#quest_3').toggleClass('db');
		$(this).toggleClass('quest-active');
	});

	$('#name_04').click(function(){
		$('#quest_4').toggleClass('db');
		$(this).toggleClass('quest-active');
	});

	$('#name_05').click(function(){
		$('#quest_5').toggleClass('db');
		$(this).toggleClass('quest-active');
	});
});