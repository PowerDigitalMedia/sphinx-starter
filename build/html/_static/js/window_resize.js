$( window ).resize(function() {

    if($(window).width() < 800)
    {
        $('#scrolltopButton').removeClass('show')

    }else{

        if($('section').scrollTop() > 300) 
        { 
            $('#scrolltopButton').addClass('show');
        } else {
            $('#scrolltopButton').removeClass('show');
        }

    }

});

