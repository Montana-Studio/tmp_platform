$(function() {
	$('#tabs').tabs();
});

$(document).ready(function() {

    $('#icon-closeMenu').click(function() {
		$('.menuLateral').toggleClass('close-menulateral');
	});

	$('.menuTop .icon-right').click(function() {
		$('.menuTop').toggleClass('show-MenuLateral');
		$('.menuTabs').toggleClass('show-MenuLateral');
		$('.menuLateral').toggleClass('show-MenuLateral'); 
	});

});