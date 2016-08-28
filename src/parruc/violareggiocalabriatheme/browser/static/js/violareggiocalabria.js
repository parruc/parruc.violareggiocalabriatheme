require(["jquery", "jquery.countdown", "jquery.jqueryui", "jquery.bxslider", "jquery.flexslider", "jquery.prettyphoto", "jquery.matchheight"], function($) {
  "use strict";
  $(document).ready(function() {
    //// Flexslider
    $('.flexslider').flexslider({controlNav: true,
                                 directionNav: false});

    ///// Countdown
    $('#countdown').countdown($('#countdown').data("deadline"), function(event) {
        $(this).html(event.strftime("%D<span class='sup'>G</span>:%H<span class='sup'>H</span>:%M<span class='sup'>M</span>:%S<span class='sup'>S</span>"));
    });

    $(".img-responsive").removeAttr("width").removeAttr("height");

    ///// Masonry Isotope
    /*$(window).load(function() {
        var $container = $('.gallery-item');
        // init
        $container.isotope({
          // options
          itemSelector: '.gal',
          layoutMode: 'masonry'
        });
    });*/

    //// Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
      theme: 'dark_rounded',
      /* light_rounded / dark_rounded / light_square / dark_square / facebook */
      social_tools: false,
      show_title: true,
      /* true/false */
    });

    /*var pull = $('#pull');
    var menu = $('#portal-globalnav');
    var menuHeight = menu.height();

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });

    var pullb = $('#pull-blog');
    var menub = $('.b-menu ul');
    var menuHeight = menub.height();

    $(pullb).on('click', function(e) {
      e.preventDefault();
      menub.slideToggle();
  });*/


    $('.same-height').matchHeight();

    $(".dropdown-toggle").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).parents("li").toggleClass("open");

    });

    $("#v-tabs, #tab").tabs();
    $('.players-slider').bxSlider({
      slideWidth: 199,
      minSlides: 2,
      maxSlides: 4,
      nextSelector: ".bx-controls",
      prevSelector: ".bx-controls",
      pager: false,
      slideMargin: 0
    });
  });
});
