/* CLICK MENU */

$('.menu-open').on('click', function(){

	$('.menu-content').addClass('open');
	$('.c-scrollbar').addClass('open');
	$('.overlay-logo').addClass('open');
	$('.overlay-btn').addClass('open');
	$('.overlay-menu').addClass('open');
	$('.menu-content .follow').addClass('open');
	$('.coordonnees').addClass('open');
	$('.menu-close').addClass('disable');
	
});

$('.menu-close').on('click', function(){
	
	$('.menu-content').removeClass('open');
	$('.c-scrollbar').removeClass('open');
	$('.overlay-logo').removeClass('open');
	$('.overlay-btn').removeClass('open');
	$('.overlay-menu').removeClass('open');
	$('.menu-content .follow').removeClass('open');
	$('.coordonnees').removeClass('open');
	$('.menu-close').removeClass('disable');
	
});