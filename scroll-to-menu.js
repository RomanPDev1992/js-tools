jQuery(function() {
	jQuery(document).on('click', '.scroll-to-menu', function(e) {
        jQuery('html, body').animate({
            scrollTop: jQuery('.home-menu').offset().top
        }, 500, 'linear');
    })
})