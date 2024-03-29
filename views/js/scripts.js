/*================
 Template Name: ApeTech - App Landing Page Template
 Description: ApeTech is a powerful 100% Responsive app, product, and  Software landing page template.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover/portfolio
 =======================*/

// TABLE OF CONTENTS

//  1. preloader
//  2. easeScroll
//  3. navbar or menu
//  4. client testimonial
//  5. hero background slider
//  6. customers slider
//  7. magnify popup video
//  8. ytplayer for hero background video
//  9. typed
// 10. back to top

function doneLoading() {
    $('#preloader').delay(200).fadeOut('fade');

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

}

jQuery(function ($) {

    'use strict';

    $( '#myNavbar .navbar-nav a' ).on( 'click', function () {
        $( '#myNavbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });

    //  1. preloader
    $(window).ready(function() {
        if ($('#main').css('display') != 'none' && $('#main').css('display') != 'hidden') {
         doneLoading();
     }
 });

    // var str = $.param( params );   
    console.log($.param.id)

    //  2. easeScroll
    $("html").easeScroll();


    //  3. navbar or menu
    $(window).scroll(function() {
        if ($(".navbar").length > 0 ) {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-59
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(function() {
        $(document).on('click', 'a.page-scroll.learn-more', function(event) {
            $( '#myNavbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
            $($( '#myNavbar .navbar-nav' ).find( 'li' )[1]).addClass('active');
        });
    });



    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    //nav menu active color
    $('.header-nav li').on("click", function(e){
        $(this).addClass('active').siblings().removeClass('active');
    });


    //header slider
    $('.mobile-slider')['owlCarousel']({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        items: 1
    });
    var u = $(".mobile-slider"),
    p = $("#next"),
    m = $("#prev");
    p.on("click", function() {
        u.trigger("next.owl.carousel", [400])
    }); m.on("click", function() {
        u.trigger("prev.owl.carousel", [400])
    });



    //header slider
    $('.header-slider')['owlCarousel']({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        items: 1,
        nav: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]
    });

    //screenshot slider
    $('.mobile-carousel-slider').owlCarousel({
        loop:true,
        margin:70,
        dots:false,
        nav:true,
        smartSpeed: 700,
        autoplay: 4000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });



    //hero content slider
    $('.hero-content-slider').owlCarousel({
        loop:true,
        margin:70,
        dots:false,
        nav:true,
        smartSpeed: 700,
        autoplay: 4000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    //  4. client testimonial
    $('.testimonial-slider').owlCarousel({
        responsiveClass:true,
        margin:20,
        dots: false,
        autoWidth:false,
        nav: true,
        autoplay:true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        autoplayTimeout: 3000,
        autoplayStopOnLast: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1200:{
                items:2
            }

        }

    });

    //  5. hero background slider
    $('.hero-background-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout:3400

    });

    // 6. customers slider
    $('.customers-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin:25,
        dots:false,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1200:{
                items:4
            }

        }

    });

    /* list_screen_slide Active
    =============================*/
    $('.list_screen_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    //blog slider
    $("#sliderBlog").owlCarousel({
        items: 3,
        dots: false,
        margin: 30,
        // rewind: !0,
        nav: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });



    // 7. magnify popup video
    $('.video').magnificPopup({
        type: 'iframe'
    });

    //  8. ytplayer for hero background video
    $(".player").mb_YTPlayer();

    //  9. typed
    var typed = $(".typed");
    $(function() {
        typed.typed({
            strings: ["Apple App Development.", "Android App.", "Windows Apps.", "App For Any Platform"],
            typeSpeed: 130,
            loop: true
        });
    });

    // 10. back to top
    (function(){

        $('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

        $(window).on("scroll", function (e) {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            $( '#myNavbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
            $($( '#myNavbar .navbar-nav' ).find( 'li' )[0]).addClass('active');
            return false;
        });

        $('#logo').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());

    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
  });

    $(document).ready(function(){
        $("#myForm").submit(function(event){
            event.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var company = $('#company').val();
            var message = $('#message').val();
            var g_recaptcha_response = $('#g-recaptcha-response').val();



            $.ajax({
                method: 'post',
                url: '/submit',
                data: JSON.stringify({ name: name, email: email, phone: phone, company: company, message: message, g_recaptcha_response:g_recaptcha_response}),
                contentType: 'application/json',
                success: function(data) {
                    $('#form-success-message').css("display", "block");
                }

            })
        });
    });

    $("#tmp-opportunity").addClass("bullish");

    $("#bull-bear").click(function(){
        $("#tmp-opportunity").toggleClass("bearish bullish");
    });

    // $('.count').each(function () {
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 2000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(now.toFixed(1));
    //         }
    //     });
    // });


}); // JQuery end
