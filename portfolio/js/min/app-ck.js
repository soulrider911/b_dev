(function($){
    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation();

    /* Text Rotator */
    /* ---------------------------------------- */
    $(".rotator").textrotator({
      animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      speed: 1600 // How many milliseconds until the next word show.
    });

    /* Full height Home section */
    /* ---------------------------------------- */  
    function homeSizer(){
        var home = $("#home");
        var winHeight = $(window).height() + 10;
        home.css("height" , winHeight);
        console.log(winHeight);
    }
    homeSizer();    
    $(window).resize(function(){
        homeSizer();    
    });


    /* Window Scroll for nav links */
    /* ---------------------------------------- */

    $('#drawer-nav nav a').click(function(e) {
        var id = $(this).attr("href");
        var offset = 0;
        var target = $(id).offset().top - offset;

        //scroll window
        $('html, body').animate({
            scrollTop: target
        }, 500);

        //add active class
        $("#drawer-nav nav a").removeClass("active");
        $(this).addClass("active");

        e.preventDefault();
    });


    /* Isotope */
    /* ---------------------------------------- */
    var $container = $('#gallery');

    // initialize Isotope
    $container.isotope();

    //isotope filters
    $('#work nav a').on('click',function(){
    	var selector = $(this).attr('data-filter');
    	$container.isotope({filter:selector});
    	$('#work nav a').removeClass('active');
    	$(this).addClass('active');
    	return false;
    });

    /* Drawer Nav */
    /* ---------------------------------------- */
    $(".drawer-toggle").on("click" , function(e){
        var body = $("body");
        var nav = $("#drawer-nav");
        var speed = 300;
        var open = false;
        
        if( !body.is(".open") ){
             
            body.addClass("open").animate({paddingLeft : 180}, speed, function(){
                $('#gallery').isotope();               
            });
            nav.animate({left : 0},speed);
           
        }else{

             body.removeClass("open").animate({paddingLeft : 0}, speed, function(){
                $('#gallery').isotope();
            });
            nav.animate({left : -180},speed);
        }
        $('#gallery').isotope();
    });

    /* Waypoints */
    /* ---------------------------------------- */

})(jQuery);