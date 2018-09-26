(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0) // use this to make space at the top for nav bar
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

    // Scroll reveal calls
    window.sr = ScrollReveal();

    sr.reveal('.intro', {
      delay: 200,
      scale: 0,
      duration: 800
    });
    sr.reveal('.precis', {
      delay: 400,
      scale: 0,
      duration: 800
    });
    sr.reveal('.next-section', {
      delay: 800,
      scale: 0,
      duration: 800
    });
    sr.reveal('.content', {
      delay: 200,
      scale: 0,
      duration: 800
    });
})(jQuery);