(function ($) {

  "use strict";

  $(window).on('load', function () {


    /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
      // Yandex ���������� �������
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
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        960: {
          items: 2
        },
        1200: {
          items: 3
        },
        1920: {
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
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    /* Map Form Toggle
    ========================================================*/
    $('.map-icon').on('click', function (e) {
      $('#conatiner-map').toggleClass('panel-show');
      e.preventDefault();
    });

    // ���� ��� SEO �������
    $('[href^="https://www.i-tat.ru/prostaya_smeta/index.html"]').on('click', function () {
      ym(57491743, 'reachGoal', 'fromSeoPages');
      return true;
    })


    $(".yandex-form-frame").on('load', function () {
      let iframeHead = $(".yandex-form-frame").contents().find('head');
      let iframeCSS = ' <style> .footer_view_iframe { display: none !important;}</style> ';
      $(iframeHead).append(iframeCSS);
    });

    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

  });



}(jQuery));



// <!--  �����������  -->

function changeChecked(id) {
  if ($("#" + id).hasClass('lgray')) {
    $("#" + id).removeClass('lgray');
    $("#" + id).parent().parent().addClass('strong');
  }
  else {
    $("#" + id).addClass('lgray');
    $("#" + id).parent().parent().removeClass('strong');
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



var total = 1400;
document.getElementById('cost').value = total;
document.getElementById('Totalcost').innerHTML = number_format(total, 0, '.', ' ') + "Р.";


$(function () {
  var handle = $("#custom-handle");
  $("#slider").slider({
    min: 0,
    create: function () {
      handle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
      handle.text(ui.value);
      $("#amount").val(ui.value);
    },
    change: function (event, ui) {

      var numBer = $("#slider").slider("value");
      var total = parseInt(document.getElementById('cost').value);
      var old_total = parseInt(document.getElementById('cost').value);
      total = numBer * 1000;
      total = total + old_total;


      input = document.getElementById('number');
      number.value = numBer;


      document.getElementById('Totalcost').innerHTML = number_format(total, 0, '.', ' ') + "Р.";
    }
  });

});


{/* /�����������  */ }



function request_form_yandex() {

  total = parseInt(document.getElementById('cost').value);
  var tx = ""
  if (!$("#cv2").hasClass('lgray')) {

    tx += "" + $("#cv2").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv3").hasClass('lgray')) {

    tx += "" + $("#cv3").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv4").hasClass('lgray')) {

    tx += "" + $("#cv4").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv5").hasClass('lgray')) {

    tx += "" + $("#cv5").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv6").hasClass('lgray')) {

    tx += "" + $("#cv6").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv61").hasClass('lgray')) {

    tx += "" + $("#cv61").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  if (!$("#cv7").hasClass('lgray')) {

    tx += "" + $("#cv7").parent().parent().text().replace(/\s+/g, " ") + "\n";
  }
  var qwe = document.getElementById('number'); 
  pars = "";
  tx = tx + " Рабочих мест: " + document.getElementById('number').value;

  if (tx != '') { pars = '&answer_long_text_2038384=' + encodeURIComponent(tx); }


  pars = 'https:' + '/' + '/forms.yandex.ru/u/5e74adffb1c70e0c2fe645e0/?iframe=1' + pars;
  document.getElementById('form1').src = pars;

  ym(61606258, 'reachGoal', 'RequestBill');
  return true;
}