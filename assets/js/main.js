(function($) {
  
  "use strict";  

  $(window).on('load', function() {


  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
        // Yandex РїРѕРїС‹С‚Р°С‚СЊСЃСЏ СѓРґР°Р»РёС‚СЊ
        $(".footer_view_iframe").hide();
        
    });


    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="lni-chevron-right"></i>',
        openedSymbol: '<i class="lni-chevron-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    

     /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: false,
        margin: 15,
        slideSpeed: 2000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 2
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 4
            }
        }
      });  

     /*  Slick Slider
    ========================================================*/
    $('.slider-center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      /* Map Form Toggle
      ========================================================*/
      $('.map-icon').on('click',function (e) {
          $('#conatiner-map').toggleClass('panel-show');
          e.preventDefault();
      });

      // цель для SEO страниц
      $('[href^="https://www.i-tat.ru/prostaya_smeta/index.html"]').on('click', function(){
        ym(57491743, 'reachGoal', 'fromSeoPages'); 
        return true;
      })

        
      $(".yandex-form-frame").on('load', function() {
          let iframeHead = $(".yandex-form-frame").contents().find('head');
          let iframeCSS = ' <style> .footer_view_iframe { display: none !important;}</style> ';
          $(iframeHead).append(iframeCSS);
      });
    
      const observer = lozad(); // lazy loads elements with default selector as '.lozad'
      observer.observe();

  });      

}(jQuery));