$(document).ready(function(){
    //Calls the getData function when the page is ready.
   $('#home').click(function(){
       $('.borderLink').css('color', 'white');
       $(this).css('color', '#d00008');
       $('.aboutContent').fadeOut('fast');
       $('.contactContent').fadeOut('fast');
       $('.photosContent').fadeOut('fast');
    });
    
    $("#about").click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.contactContent').is(':visible'))
        {
            $('.contactContent').fadeOut('fast', function(){
                $('.aboutContent').fadeIn('fast');               
            });
            noneVisible = false;
        }
        if($('.photosContent').is(':visible'))
        {
            $('.photosContent').fadeOut('fast', function(){
                $('.aboutContent').fadeIn('fast');               
            });
            noneVisible = false;
        }
        if(noneVisible){
            $('.aboutContent').fadeIn('fast');
        }  
    });
    
    $('#contact').click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.aboutContent').is(':visible'))
        {
            $('.aboutContent').fadeOut('fast', function(){
                $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');                
            });
            noneVisible = false;
        }
        if($('.photosContent').is(':visible'))
        {
            $('.photosContent').fadeOut('fast', function(){
                $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');              
            });
            noneVisible = false;
        }
        if(noneVisible){
            $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                opacity: 1
            }, 'fast'); 
        } 
    });
    
    $('#photos').click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.aboutContent').is(':visible'))
        {
            $('.aboutContent').fadeOut('fast', function(){
                $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');           
            });
            noneVisible = false;
        }
        if($('.contactContent').is(':visible'))
        {
            $('.contactContent').fadeOut('fast', function(){
                $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');             
            });
            noneVisible = false;
        } 
        if(noneVisible){
            $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');
        } 
       
    });
});