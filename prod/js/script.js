$(function() {
	$('#tabs').tabs();
});
$(document).ready(function() {

    $('#icon-closeMenu').click(function() {
		$('.menuLateral').toggleClass('close-menulateral');
		$('.name-user-li').toggleClass('show-image-Menu'); 
		$('.content-tabs').toggleClass('Menu-Collapsed-width'); 
		$grid.isotope('destroy');
		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'packery',
			masonry: {
				columnWidth: '.grid-item'
			}
		});
	});

	$('.menuTop .icon-right').click(function() {
		$('.menuTop').toggleClass('show-MenuLateral');
		$('.menuTabs').toggleClass('show-MenuLateral');
		$('.menuLateral').toggleClass('show-MenuLateral'); 
	});

	$('#editarPerfil').click(function(){
		$('.personaPerfilForm .field-tmp').toggleClass('fields-hide');
		$('.personaPerfilForm .btn-vermas').toggleClass('btn-Hide');
		$('.botonera-EditPersona').toggleClass('edit-Hide');
		$('.delete-habilidad').toggleClass('element-Hide');
		$('.btn-EditImg').toggleClass('element-Hide');

		$('.block-RRSS .txt-block').toggleClass('element-Hide');
		$('.block-RRSS .block-inside-single').toggleClass('gridRRSS');
		$('.bloque-tiempo .title-dato').toggleClass('element-Hide');
		$('.header-bloque').toggleClass('header-Edit');
		$grid.isotope('destroy');
		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'packery',
			masonry: {
				columnWidth: '.grid-item'
			}
		});
	});

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'packery',
		masonry: {
			columnWidth: '.grid-item'
		}
	});

	if ($(window).width() < 1024){	
		$('#menuLateralMobile').removeClass('close-menulateral');
		$('.option-MenuLateral ul li').click(function() {
			$('#menuTop').toggleClass('show-MenuLateral');
			$('#menuLateralMobile').removeClass('show-MenuLateral');
			$('#tabs').toggleClass('show-MenuLateral');
		});
	}	

	$('.option-MenuLateral ul li:first-child').click(function(){
		$('.personaPerfilForm .field-tmp').toggleClass('fields-hide');
		$('.personaPerfilForm .btn-vermas').toggleClass('btn-Hide');
		$('.botonera-EditPersona').toggleClass('edit-Hide');
		$('.delete-habilidad').toggleClass('element-Hide');
		$('.btn-EditImg').toggleClass('element-Hide');

		$('.block-RRSS .txt-block').toggleClass('element-Hide');
		$('.block-RRSS .block-inside-single').toggleClass('gridRRSS');
		$('.bloque-tiempo .title-dato').toggleClass('element-Hide');
		$('.header-bloque').toggleClass('header-Edit');
		$grid.isotope('destroy');
		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'packery',
			masonry: {
				columnWidth: '.grid-item'
			}
		});
	});

});