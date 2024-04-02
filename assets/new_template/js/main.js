$(document).ready(function() {
    $(document).on("change", "form input, form textarea", function() {
        "" == $(this).val() ? $(this).removeClass("in") : $(this).addClass("in");
    });
    $("form input, form textarea").each(function() {
        "" == $(this).val() ? $(this).removeClass("in") : $(this).addClass("in");
    });
    if ($(".main-carousel").length > 0) {
        let main_carousel = $(".main-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            lazyLoad: true,
            navContainer: ".main_slider-control",
            navText: ['<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>', '<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'],
            dots: false,
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },
                1120: {
                    nav: true,
                    dots: false
                }
            }
        });

        main_carousel.on('loaded.owl.lazy changed.owl.carousel', function() {
            let obj = $(".main_slider-loading");
            obj.css("width", "0px").stop();
            obj.animate({
                width: "100%"
            }, 7000, function() {
                obj.css("width", "0px");
            });
            $(".main-carousel").trigger('stop.owl.autoplay').trigger('play.owl.autoplay');
        });
    }

    if ($(".portfolio_carousel").length > 0) {
        let portfolio = $(".portfolio_carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            animateOut: 'fadeOut',
            autoplayTimeout: 7000,
            nav: true,
            autoHeight: false,
            lazyLoad: true,
            navText: ['<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>', '<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'],
            dots: false,
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },
                980: {
                    nav: true,
                    dots: false
                }
            }
        });

        portfolio.on('loaded.owl.lazy changed.owl.carousel', function() {
            let obj = $(".way_score i");
            obj.css("width", "0px").stop();
            obj.animate({
                width: "100%"
            }, 7000, function() {
                obj.css("width", "0px");
            });

            $(".portfolio_block svg").css("left", "inherit").stop();
            $(".portfolio_block svg").animate({
                left: "100%"
            }, 10000, function() {
                obj.css("left", "inherit");
            });

            $(".portfolio_carousel").trigger('stop.owl.autoplay').trigger('play.owl.autoplay');
        });
    }

    if ($(".fast_news-carousel").length > 0) {
        $(".fast_news-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 7000,
            nav: false,
            autoHeight: false,
            navContainer: ".fast_news-control",
            navText: ['<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>', '<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'],
            dots: true,
            responsive: {
                520: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                800: {
                    nav: true,
                    items: 3,
                    dots: false
                }
            }
        });
    }

    if ($(".articles-carousel").length > 0) {
        $(".articles-carousel").owlCarousel({
            items: 4,
            margin: 20,
            loop: false,
            navText: ['<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>', '<svg><use xlink:href="/assets/new_template/svg.svg#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'],
            navContainer: ".articles_carousel_nav",
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                460: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1200: {
                    items: 4,
                    dots: false,
                    nav: true
                }
            }
        });
    }

    if ($("#quiz").length > 0) {
        $(".go_forward").on("click", function() {
            $(".quiz_poster").addClass("start");
            $(".quiz_question-1").addClass("active");
        });

        $(".quiz_question .quiz_var").on("click", function() {
            $(this).closest(".quiz_question").removeClass("active").next().addClass("active");
        });

        $(".quiz_question .go_back").on("click", function() {
            let o = $(this).closest(".quiz_question"),
                p = o.prev();

            o.removeClass("active");

            if (p.data("q") > 0) {
                p.addClass("active");
            } else {
                $(".quiz_poster").removeClass("start");
            }
        });

        $(".prize_choice label").on("click", function() {
            $(".quiz_prize span").text($(this).find("small").text());
            $(".quiz_prize p").text($(this).find("span").text());
        });
    }

    $(".faq_block p, .accordion > p").on("click", function() {
        $(this).siblings(".answer").slideToggle().parent().toggleClass("open").siblings().removeClass("open").find(".answer").slideUp();
    });

    $(".network_section .more").on("click", function() {
        $(".network_section .columns").addClass("active");
    });

    if ($(".notify").length > 0) {
        $(".notify button").on("click", function() {
            $(".notify").hide();
            document.cookie = 'have_cookie=yes;expires=100800;path=/';
        });
    }
});

$(document).on('af_complete', function(event, response) {
    /*Отправляем квиз-форму*/
    if (response.form.attr('id') == 'quiz' && response.success) {
        $(".quiz_question").removeClass("active");
        $(".quiz_success").addClass("active");

        setTimeout(function() {
            $(".quiz_poster").removeClass("start");
            $(".quiz_success").removeClass("active");
        }, 5000);
    }


});

window.onload = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: window.innerWidth > 500 ? 0.4 : 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let cl = entry.target.dataset.animation,
                    rp = entry.target.dataset.repeat;

                console.log(cl);

                entry.target.classList.add(cl);

                if (rp > 0) {
                    setTimeout(function() {
                        entry.target.classList.remove(cl);
                    }, rp);
                }
            }
        });
    }, options);

    const arr = document.querySelectorAll('.animation_block');
    arr.forEach(i => {
        observer.observe(i);
    });
}

$(document).on('af_complete', function(event, response) {
    if (response.success) {
        Fancybox.close();
        window.location.replace("https://bestdeals.ru/thanks/");
    }
});