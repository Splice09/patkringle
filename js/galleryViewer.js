$(document).ready(function(){
    //OPEN GALLERY OF THUMBNAILS BASED ON ICON CLICK
    $('.numberLink').click(function(){
        $('.numberLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var galleryBoxId = $(this).data('value');
        if (galleryBoxId == 18){
            $('#gb17').fadeOut('fast');
            $('#gb16').fadeOut('fast');
        }
        else if (galleryBoxId == 17){
            $('#gb18').fadeOut('fast');
            $('#gb16').fadeOut('fast');
        }
        else{
            $('#gb18').fadeOut('fast');
            $('#gb17').fadeOut('fast');
        }
        $('#gb' + galleryBoxId).css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 'fast'); 
    });    
});