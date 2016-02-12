(function ($) {
  Drupal.behaviors.mymodule = {
    attach: function (context, settings) {
      $('.datepicker', context).datepicker({
        dateFormat: 'dd.mm.yy'
      });
    }
  };
})(jQuery);