require(["jquery", "jquery.countdown", "jquery.jqueryui", "jquery.bxslider", "jquery.flexslider"], function($) {
  "use strict";
  $(document).ready(function() {
    //// Flexslider
    $('.flexslider').flexslider();
    ///// Countdown
    $('#countdown').countdown($('#countdown').data("deadline"), function(event) {
        $(this).html(event.strftime('%D giorni %H:%M:%S'));
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
    $('.slider1').bxSlider({
      slideWidth: 157,
      minSlides: 2,
      maxSlides: 4,
      pager: false,
      slideMargin: 0
    });
    $('.slider2').bxSlider({
      //slideWidth: 156,
      minSlides: 1,
      maxSlides: 4,
      pager: false,
      slideMargin: 0
    });
  });
});
