/* ==========================================================================
		countdown timer
========================================================================== */
(function($) {
  "use strict";
$('.countdown').downCount({
     date: '01/01/2015 12:00:00' // m/d/y
});
})(jQuery);


/*-----------------------------------------------------------------------------------*/
/* Pretty Photo
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "light_square"
    });
});


/*-----------------------------------------------------------------------------------*/
/*	STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
});
})(jQuery);



/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function() {
  $("#owl-testi").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  navigationText: ["<i class='ion-ios7-arrow-back'></i>","<i class='ion-ios7-arrow-forward'></i>"],
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
  });
});
})(jQuery);


/*-----------------------------------------------------------------------------------*/
/*  THEME PUNCH SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {								
jQuery('.tp-banner').show().revolution({
	dottedOverlay:"none",
	delay:9000,
	startwidth:1170,
	startheight:800,
	hideThumbs:200,
	thumbWidth:100,
	thumbHeight:50,
	thumbAmount:5,
				
	navigationType:"none",
	navigationArrows:"solo",
	navigationStyle:"preview1",
						
	touchenabled:"on",
	onHoverStop:"on",
		
	swipe_velocity: 0.7,
	swipe_min_touches: 1,
	swipe_max_touches: 1,
	drag_block_vertical: false,
									
											
	keyboardNavigation:"on",
				
	navigationHAlign:"center",
	navigationVAlign:"bottom",
	navigationHOffset:0,
	navigationVOffset:20,

	soloArrowLeftHalign:"left",
	soloArrowLeftValign:"center",
	soloArrowLeftHOffset:20,
	soloArrowLeftVOffset:0,

	soloArrowRightHalign:"right",
	soloArrowRightValign:"center",
	soloArrowRightHOffset:20,
	soloArrowRightVOffset:0,
							
	shadow:0,
	fullWidth:"on",
	fullScreen:"off",
	spinner:"spinner0",
						
	stopLoop:"off",
	stopAfterLoops:-1,
	stopAtSlide:-1,

	shuffle:"off",
			
	autoHeight:"off",						
	forceFullWidth:"off",						
												
									
												
	hideThumbsOnMobile:"off",
	hideNavDelayOnMobile:1500,						
	hideBulletsOnMobile:"off",
	hideArrowsOnMobile:"off",
	hideThumbsUnderResolution:0,
		
	hideSliderAtLimit:0,
	hideCaptionAtLimit:0,
	hideAllCaptionAtLilmit:0,
	startWithSlide:0
});
});	//ready





/*-----------------------------------------------------------------------------------*/
/* ANIMATION
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();
})(jQuery);



/*-----------------------------------------------------------------------------------*/
/* LOADER
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$("#page-loader").delay(500).fadeOut("slow");
});
})(jQuery);



/* ==============================================
			Back to Top
=============================================== */
$(window).scroll(function(){
	"use strict";
    if($(window).scrollTop() > 300){
      $("#back-to-top").fadeIn(600);
    } else{
      $("#back-to-top").fadeOut(600);
    }
});

$('#back-to-top, .back-to-top').click(function() {
      $('html, body').animate({ scrollTop:0 }, '1000');
      return false;
});




/* ==============================================
	Active Menu Item on Page Scroll
=============================================== */ 
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#header a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#header a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#header a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$('#home-carousel').carousel({
  interval: 5000 // set your desired interval
})