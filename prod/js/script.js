$(function() {
	$('#tabs').tabs();
});

$(document).ready(function() {

    $('#icon-closeMenu').click(function() {
		$('.menuLateral').toggleClass('close-menulateral');
		$('.name-user-li').toggleClass('show-image-Menu'); 
		$('.content-tabs').toggleClass('Menu-Collapsed-width'); 
	});

	$('.menuTop .icon-right').click(function() {
		$('.menuTop').toggleClass('show-MenuLateral');
		$('.menuTabs').toggleClass('show-MenuLateral');
		$('.menuLateral').toggleClass('show-MenuLateral'); 
	});

	/*$('.option-MenuLateral ul li').click(function() {
		$('.menuTop').toggleClass('show-MenuLateral');
		$('.menuTabs').toggleClass('show-MenuLateral');
		$('.menuLateral').toggleClass('show-MenuLateral'); 
	});*/

	$('#editarPerfil').click(function(){
		$('.personaPerfilForm .field-tmp').toggleClass('fields-hide');
		$('.personaPerfilForm .btn-vermas').toggleClass('btn-Hide');
		$('.botonera-EditPersona').toggleClass('edit-Hide');
	});

});