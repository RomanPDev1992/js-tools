(function(){
	$(document).on('click', '.popup', function(e){
		var div = $( '#popup-r' );/*якщо клік не по цьому елементу - приховуємо попап*/
			if ( !div.is(e.target)
				&& div.has(e.target).length === 0 ) {
					$('.popup').hide();
			}
	});
})();
