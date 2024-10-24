(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    //Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        },
        onInitialized: addBgItemClass,
        onTranslated: addBgItemClass
    });
    

    function addBgItemClass(event) {
        $('.owl-item').removeClass('bg-item');
        var currentItem = event.item.index;
        $('.owl-item').eq(currentItem).addClass('bg-item');
    }

    
    $(".project-carousel").owlCarousel({
        autoplay: true,           
        autoplayTimeout: 5000,     // Thời gian mỗi slide sẽ hiện (5000ms = 5 giây)
        autoplayHoverPause: true,  // Tạm dừng autoplay khi di chuột vào
        smartSpeed: 1000,          // Tốc độ chuyển đổi giữa các slide
        margin: 25,                // Khoảng cách giữa các slide
        loop: true,                // Vòng lặp lại các slide
        dots: false,               // Tắt hiển thị dấu chấm phân trang
        nav: true,                 // Bật nút điều hướng (next/prev)
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],                         // Tùy chỉnh biểu tượng điều hướng
        responsive: {
            0: {
                items: 1           // Hiển thị 1 item trên màn hình nhỏ hơn 576px
            },
            576: {
                items: 1           // Hiển thị 1 item trên màn hình từ 576px đến 768px
            },
            768: {
                items: 2           // Hiển thị 2 item trên màn hình từ 768px đến 1300px
            },
            1300: {
                items: 2           // Hiển thị 2 item trên màn hình lớn hơn 1300px
            }
        }
    });



    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    


})(jQuery);

