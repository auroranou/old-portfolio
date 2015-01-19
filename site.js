
$(document).ready(function() {
	var loc = window.location.hash;
	// set landing div (class = top) to full window height
	var height = $(window).height() - 20 + 'px';
	$('.top').css('height', height);

	// change h1 on hover
	var intervalID; 
	$('h1').hover(function() {
		$('#name').html('_');
		intervalID = setInterval(function() {
			$('#name').toggleClass('hidden');
		}, 500);
	},
	function() {
		$('#name').removeClass('hidden').html('Aurora Nou');
		clearInterval(intervalID);
	});

	// transition animation from homepage to resume
	$('a[href="#resume"]').click(function() {
		$('.center').fadeOut();
		$('#index-top').slideUp(1000);
		$('#page-resume').show();
		$('#index-main').addClass('hidden');
		$('body').animate({ scrollTop: 0}, 'slow');
		$('#header-name').fadeIn();
	});

	if (loc ==="#resume") {
		$('#page-index').addClass('hidden');
		$('#page-resume').show();
		$('#header-name').show();
	}
});