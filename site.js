$(document).ready(function(){

	$('.portfolio').hover(function(){
		$(this).find('.portfolio-title').fadeIn('fast');
	},
	function(){
		$(this).find('.portfolio-title').fadeOut('slow');
	});

});