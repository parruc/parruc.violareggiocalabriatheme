;(function( $ ){
  $(document).ready(function() {
      $('#countdown').countdown($('#countdown').data("deadline"), function(event) {
          $(this).html(event.strftime('%D giorni %H:%M:%S'));
      });
  });
})( jQuery );
