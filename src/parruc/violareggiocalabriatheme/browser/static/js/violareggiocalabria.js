require(["jquery", "jquery.countdown", "jquery.jqueryui", "jquery.bxslider", "jquery.flexslider", "jquery.prettyphoto"], function($) {
  "use strict";
  $(document).ready(function() {
    //// Flexslider
    $('.template-hp .flexslider').flexslider({controlNav: true});
    ///// Countdown
    $('#countdown').countdown($('#countdown').data("deadline"), function(event) {
        $(this).html(event.strftime("%D <span class='sup'>G</span> %H <span class='sup'>H</span> %M <span class='sup'>M</span> %S <span class='sup'>S</span>"));
    });

    // Select Navigation on Mobile Devices
    /*$('.mobilemenu select').change(function() {
      var url = $(this).val();
      if (url) {
        window.location = url;
      }
      return false;
  });*/

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

    $("#v-tabs, #tab").tabs();
    $('.players-slider').bxSlider({
      slideWidth: 157,
      minSlides: 2,
      maxSlides: 4,
      nextSelector: ".bx-controls",
      prevSelector: ".bx-controls",
      pager: false,
      slideMargin: 0
    });
  });
});
