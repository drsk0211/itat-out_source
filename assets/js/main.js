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
        // Yandex ïîïûòàòüñÿ óäàëèòü
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
        closeOnClick: true,
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

      // ˜˜˜˜ ˜˜˜ SEO ˜˜˜˜˜˜˜
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


  
  // <!--  ÊÀËÜÊÓËßÒÎÐ  -->
  
  function changeChecked(id){
    if ($("#"+id).hasClass('lgray')) {
      $("#"+id).removeClass('lgray');
      $("#"+id).parent().parent().addClass('strong');
    }
    else{
      $("#"+id).addClass('lgray');
      $("#"+id).parent().parent().removeClass('strong');
    }
    calculate();
  }
  
  number_format = function (number, decimals, dec_point, thousands_sep) {
    number = number.toFixed(decimals);

    var nstr = number.toString();
    nstr += '';
    x = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? dec_point + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');

    return x1 + x2;
  }

  var total = 27000;
  document.getElementById('Totalcost').innerHTML = number_format(total, 0, '.', ' ')+"ð.";

  


  function calculate() {
    total=27000;
    if (!$("#cv2").hasClass('lgray')) {
      total += parseInt($("#cv2").data('value'));
    }
    if (!$("#cv3").hasClass('lgray')) {
      total += parseInt($("#cv3").data('value'));
    } 
    if (!$("#cv4").hasClass('lgray')) {
      total += parseInt($("#cv4").data('value'));
    } 
    if (!$("#cv5").hasClass('lgray')) {
      total += parseInt($("#cv5").data('value'));
    } 
    if (!$("#cv6").hasClass('lgray')) {
      total += parseInt($("#cv6").data('value'));
    } 
    if (!$("#cv61").hasClass('lgray')) {
      total += parseInt($("#cv61").data('value'));
    } 
    if (!$("#cv7").hasClass('lgray')) {
      total += parseInt($("#cv7").data('value'));
    } 
    if (!$("#cv8").hasClass('lgray')) {
      total += parseInt($("#cv8").data('value'));
    } 
 
     
    
    //alert(total);
    document.getElementById('Totalcost').innerHTML = number_format(total, 0, '.', ' ') + "ð.";
  }

  {/* /ÊÀËÜÊÓËßÒÎÐ  */}


  
function request_form_yandex() {
  
  total=27000;
  var tx = '  27 000 Ïðîô Áàçîâûé; '+"\n";
    if (!$("#cv2").hasClass('lgray')) {
      total += parseInt($("#cv2").data('value'));
      tx += ""+ $("#cv2").parent().parent().text().replace(/\s+/g, " ")+"\n";
    }
    if (!$("#cv3").hasClass('lgray')) {
      total += parseInt($("#cv3").data('value'));
      tx += ""+ $("#cv3").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv4").hasClass('lgray')) {
      total += parseInt($("#cv4").data('value'));
      tx += ""+ $("#cv4").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv5").hasClass('lgray')) {
      total += parseInt($("#cv5").data('value'));
      tx += ""+ $("#cv5").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv6").hasClass('lgray')) {
      total += parseInt($("#cv6").data('value'));
      tx += ""+ $("#cv6").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv61").hasClass('lgray')) {
      total += parseInt($("#cv61").data('value'));
      tx += ""+ $("#cv61").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv7").hasClass('lgray')) {
      total += parseInt($("#cv7").data('value'));
      tx += ""+ $("#cv7").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
    if (!$("#cv8").hasClass('lgray')) {
      total += parseInt($("#cv8").data('value'));
      tx += ""+ $("#cv8").parent().parent().text().replace(/\s+/g, " ")+"\n";
    } 
 
  pars="";
  tx = tx + " ÈÒÎÃÎ: "+ total;

  if(tx != ''){ pars = '&answer_long_text_2038384='+ encodeURIComponent(tx); }
  
  
  pars = 'https:'+'/'+'/forms.yandex.ru/u/5e74adffb1c70e0c2fe645e0/?iframe=1'+pars;
  document.getElementById('form1').src = pars;
  
  ym(61606258, 'reachGoal', 'RequestBill'); 
  return true;
}