$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 50) {
            $('.scroll-to-top').addClass("show");
        } else {
            $('.scroll-to-top').removeClass("show");
        }
    });

    $('.scroll-to-top').click(function() {
        $('html').animate({ scrollTop: 0 });
    });
    //slide-up script

    var typed = new Typed(".home-text-animation", {
        strings: ["2077"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.contact-btn').click(function() {
        $('.contact-popup').addClass("open-popup");
    });

    $('.popup-contact-btn').click(function() {
        $('.contact-popup').removeClass("open-popup");
    });


    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
});