
//---------------------
// JQUERY
//---------------------

$(document).ready(function () {


    var $newElem1 = $( "<a id='scrolltopButton'></a>" );
    $( "section" ).append( $newElem1 );


    var btn = $('#scrolltopButton');
    btn.addClass('show');
    // $('#main-wrapper').scroll(function() {

    //     if($('#main-wrapper').scrollTop() > 300) 
    //     { 
    //         btn.addClass('show');
    //     } else {
    //         btn.removeClass('show');
    //     }

    // });
    btn.on('click', function(e) {

        e.preventDefault();
        //$('html, body').animate({scrollTop:0}, '300');
        $('section').animate({scrollTop:0}, '300');
        
    });

    
});






//---------------------
// FOR REFERENCE
//---------------------

// var $newdiv1 = $( "<div id='object1'></div>" ),
//   newdiv2 = document.createElement( "div" ),
//   existingdiv1 = document.getElementById( "foo" );
 
// $( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );


