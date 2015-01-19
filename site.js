
$(document).ready(function() {
	// set landing div (class = top) to full window height
	var height = $(window).height() - 20 + 'px';
	$('.top').css('height', height);

	// slide top div down on homepage
	$('#index-top').hide().slideDown(1000);

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
		$('.center').hide();
		$('#index-top').slideUp(1000);
		$('#index-main').addClass('hidden');
		$('#page-resume').show();
		$('body').animate({ scrollTop: 0}, 'slow');
	});
});