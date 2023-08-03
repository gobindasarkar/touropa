(function ($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut("slow");
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  var lastScroll = 0;
  var isScrolled = false;

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header-area");
    if (header) {
      var currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      var scrollDirection = currentScroll < lastScroll;
      var shouldToggle = isScrolled && scrollDirection;

      if (currentScroll === 0) {
        header.classList.remove("stick");
      } else {
        isScrolled = true;
        header.classList.toggle("stick", shouldToggle);
      }

      lastScroll = currentScroll;
    }
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*-------------------------------------------
    js counter
    --------------------------------------------- */
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
    /*-------------------------------------------
    js favorite-btn
    --------------------------------------------- */
    $(".favorite-btn").on('click', function() {
      $(this).toggleClass('active');
    })
    /*-------------------------------------------
      our-client-slider active
    --------------------------------------------- */
    $(".our-client-slider").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      dots: false,
      arrows: true,
      prevArrow: '<i class="slick-prev fa-solid fa-angle-left"></i> ',
      nextArrow: '<i class="slick-next fa-solid fa-angle-right"></i> ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
    /*--------------------------------
    isotope activation 
    -----------------------------------*/
    // filter items on button click
    $(".filtering-button").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
    
    var $grid = $(".grid").isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: ".grid-item",
      filter: ".special-deals",
      percentPosition: true,
      animationOptions: {
        duration: 500,
        easing: "zoom-in",
      },
      masonry: {
        // use element for option
        columnWidth: ".grid-item",
      },
      transitionDuration: ".9s",
    });
    $(".filtering-button li").on("click", function () {
      $(".filtering-button li").removeClass("active");
      $(this).addClass("active");
    });
  });
})(jQuery);
