$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 500) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 900 );
	return false;
} );

