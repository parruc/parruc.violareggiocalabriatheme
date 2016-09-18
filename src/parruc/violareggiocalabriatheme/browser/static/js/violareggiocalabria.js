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

    var select = $("#contact-form form select#form-widgets-recipient");
    $("#contact-form .nav a").on("click", function(evt){
        evt.preventDefault();
        $(select).val($(this).data("token"));
        $("#contact-form .nav a.active").removeClass("active");
        $(this).addClass("active");
    });

    $("#contact-form .nav a[data-token='"+$(select).val()+"']").addClass("active");

    //// Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
      theme: 'dark_rounded',
      /* light_rounded / dark_rounded / light_square / dark_square / facebook */
      social_tools: false,
      show_title: true,
      /* true/false */
    });

    $('.same-height').matchHeight();

    $('.dropdown-toggle').dropdown();

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
