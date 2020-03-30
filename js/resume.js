(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // DOM Elements
  var body = document.body;
  var nav = document.getElementById('sideNav');
  var toggler = $('#theme-toggler');

  // Apply the cached theme on reload
  var theme = localStorage.getItem('theme');

  if (theme) {
    body.classList.add(theme);
    if (theme === 'dark') {
      nav.classList.replace('navbar-dark', 'navbar-light');
      toggler.prop('checked', true);
    } else if (theme === 'light') {
      nav.classList.replace('navbar-light', 'navbar-dark');
    }
  }

  // Checkbox Event Handler
  toggler.change(function (event) {
    if (event.target.checked) {
      body.classList.replace('light', 'dark');
      nav.classList.replace('navbar-dark', 'navbar-light');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace('dark', 'light');
      nav.classList.replace('navbar-light', 'navbar-dark');
      localStorage.setItem('theme', 'light');
    }
  });

})(jQuery); // End of use strict