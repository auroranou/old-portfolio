$(document).ready(function(){

	$('.portfolio').hover(function(){
		$(this).find('.portfolio-title').fadeIn('slow');
	},
	function(){
		$(this).find('.portfolio-title').fadeOut('slow');
	});
	
});