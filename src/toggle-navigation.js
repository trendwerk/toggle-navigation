jQuery(function($) {
  $.fn.toggleNavigation = function() {
    this.click(function() {
      $('html').toggleClass('navigation-open');
    });
  };
});
