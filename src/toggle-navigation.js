! function($) {
  $.fn.toggleNavigation = function() {
    this.click(function() {
      window.scrollTo(0, 0);
      $('body').toggleClass('navigation-open');
    });
  };
}(jQuery);
