jQuery( document ).ready(function( $ ) {
	$('#openPopup').click(function(){
        $('#popup').fadeIn(300);
    });
    $('#closePopup').click(function(){
        $('#popup').fadeOut(300);
    });
});