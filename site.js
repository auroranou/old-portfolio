$(document).ready(function(){
	// set landing div (class = top) to full window height
	var height = $(window).height() + 'px';
	$('.top').css('height', height);

	// change h1 on hover
	var intervalID; 
	$('h1').hover(function(){
		$('#name').html('_');
		intervalID = setInterval(function() {
			$('#name').toggleClass('hidden');
		}, 500);
	},
	function(){
		$('#name').removeClass('hidden').html('Aurora Nou');
		clearInterval(intervalID);
	});


});