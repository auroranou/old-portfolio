
$(document).ready(function() {
	var loc = window.location.hash;

	// change h1 on hover
	var intervalID; 
	$('#name').html('_');
	intervalID = setInterval(function() {
		$('#name').toggleClass('color-change');
	}, 500);
	setInterval();

	// transition animation from homepage to resume
	$('a[href="#resume"]').click(function() {
		$('.center').fadeOut();
		$('#index-top').slideUp(1000);
		$('#page-resume').show();
		$('#page-index').hide();
		$('body').animate({ scrollTop: 0}, 'slow');
		$('#header-name').fadeIn();
	});

	// maintain resume page styling and content
	if (loc === '#resume') {
		$('#header-name').show();
		$('#page-resume').show();
		$('#page-index').addClass('hidden');
	}

	// transition animation from homepage to portfolio
	$('a[href="#portfolio-one"]').click(function() {
		var width = $(window).width();
		$('#page-index').fadeOut(500);
		$('#page-portfolio-one').show();
	});

	// maintain portfolio page styling and content
	if (loc === '#portfolio-one') {
		$('#page-index').addClass('hidden');
		$('#page-portfolio-one').show();
	}

	// transition from portfolio to homepage
	$('a[href="#"]').click(function() {
		$('#page-portfolio-one').fadeOut(500);
		$('#page-index').fadeIn(500);
	});

	if (loc === '' || loc === '#') {
		$('#page-index').show();
		$('#page-resume').addClass('hidden');
	}
});