! function($) {
  $.fn.toggleNavigation = function() {
    this.click(function() {
      window.scrollTo(0, 0);
      $('html').toggleClass('navigation-open');
    });
  };
}(jQuery);
