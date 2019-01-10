/* N A V I G A T I O N */

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 250) {
            $("nav").removeClass("bg-custom");
        } else {
            $("nav").addClass("bg-custom");
        }
    });
});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
    });
});

$(function () {
    $("ul.navbar-nav li a").on("click touch", function () {
        $(".navbar-toggler").click();
    });
});

/* S E R V I C E S */

$(function () {
    new WOW().init();
})

/* W O R K */

$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})

/* T E A M */

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 1300,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            }
        }
    });
});

/* T E S T I M O N I A L S */

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1300,
        loop: true,
        autoplayHoverPause: true
    });
});

/* S T A T S */

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

/* C L I E N T S */

$(function () {
    $(".clients-logo").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1300,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});