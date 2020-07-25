/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
var addEvent = function addEvent( element, eventName, func ) {
	if ( element.addEventListener ) {
		return element.addEventListener( eventName, func, false );
	} else if ( element.attachEvent ) {
		return element.attachEvent( "on" + eventName, func );
	}
};

jQuery( document ).ready( function( $ ) {
	'use strict';

	// popup-menu
	jQuery( '#open-left' ).on( 'click', function() {
		jQuery( 'body' ).addClass( 'body-noscroll' );
		jQuery( '.popup-menu' ).toggleClass( 'show' );
		jQuery( '.popup-menu-inner' ).addClass( 'open' );
	} );

	jQuery( '.popup-menu' ).on( 'click', function() {
		jQuery( 'body' ).removeClass( 'body-noscroll' );
		jQuery( '.popup-menu-inner' ).removeClass( 'open' );
		jQuery( '.popup-menu' ).toggleClass( 'show' );
	} );

	jQuery( '.mobile-menu .menu-item-has-children' ).each( function() {
		jQuery( this ).append( '<span class="mobile-menu-expand fa fa-angle-down"></span>' );
	} );

	jQuery( '.mobile-menu-expand' ).on( 'click', function() {
		jQuery( this ).parent().find( 'ul:first' ).slideToggle();
		jQuery( this ).tmToggleClass( 'fa-angle-down', 'fa-angle-up' );
	} );

	// mini-cart
	var $mini_cart = $( '.mini-cart' );
	$mini_cart.on( 'click', function( e ) {
		$( this ).addClass( 'open' );
	} );

	$( document ).on( 'click', function( e ) {
		if ( $( e.target ).closest( $mini_cart ).length == 0 ) {
			$mini_cart.removeClass( 'open' );
		}
	} );

	// search
	$( '.search-btn' ).on( 'click', function() {
		$( '.top-search' ).slideToggle();
		$( '.top-search input' ).focus();
	} );

	// product images
	jQuery( '.woocommerce-product-gallery__wrapper' ).lightGallery( {
		selector: 'a',
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false
	} );
} );

jQuery.fn.tmToggleClass = function( t1, t2 ) {
	if ( this.hasClass( t1 ) ) {
		this.removeClass( t1 );
		this.addClass( t2 );
	} else {
		this.removeClass( t2 );
		this.addClass( t1 );
	}
	return this;
};