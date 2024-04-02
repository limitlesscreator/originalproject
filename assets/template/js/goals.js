Fancybox.bind('[data-fancybox]', {
    on: {
        close: (fancybox, key) => {
            $("#feed form").data("goal", "");
        }
    }
});

/***цели***/
$(document).ready(function() {

    $(".transport_form .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'order-open-pop-up');
    });

    $("#feed form").on("submit", function() {
        switch ($("#feed input[name=mode]").val()) {
            case "1":
                ym(24936983, 'reachGoal', 'order-submit-form');
                break;
            case "100":
                ym(24936983, 'reachGoal', 'request-submit');
                break;
            case "101":
                ym(24936983, 'reachGoal', 'scheme-of-work-submit');
                break;
        }
    });

    $(".presentation").on("click", function() {
        ym(24936983, 'reachGoal', 'presentation');
    });

    $(".service_ways .btn").on("click", function() {
        $("#feed input[name=mode]").val("100");
        ym(24936983, 'reachGoal', 'request-pop-up');
    });

    $(".how_work .btn").on("click", function() {
        $("#feed input[name=mode]").val("101");
        ym(24936983, 'reachGoal', 'scheme-of-work-pop-up');
    });

    $(".faq_form form").on("submit", function() {
        ym(24936983, 'reachGoal', 'Ask-a-question');
    });

    $(".whatsapp_section .ws_block .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'whatsapp-forma');
    });

    $("footer .fp_phone .wa").on("click", function() {
        ym(24936983, 'reachGoal', 'whatsapp-footer');
    });


    //квиз
    $(".quiz_poster .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'kviz-start');
    });

    $(".quiz_question-1 label").on("click", function() {
        ym(24936983, 'reachGoal', 'kviz-2shag');
    });

    $(".quiz_question-2 label").on("click", function() {
        ym(24936983, 'reachGoal', 'kviz-3shag');
    });

    $(".quiz_question-3 label").on("click", function() {
        ym(24936983, 'reachGoal', 'kviz-4shag');
    });

    //Баннеры на главной
    $(".main_slide-1 .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'banner-kitai');
    });

    $(".main_slide-3 .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'banner-vladivostok');
    });

    $(".main_slide-4 .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'banner-india');
    });

    $(".main_slide-5 .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'banner-tyrcia');
    });


    //Рассылка
    $(".fast_news button[data-fancybox]").on("click", function() {
        ym(24936983, 'reachGoal', 'podpisatsa-na-rassilky-open-pop-up');
        $("#feed form").data("goal", "podpisatsa-na-rassilky-submit-pop-up");
    });

    $(".train_transport .btn").on("click", function() {
        ym(24936983, 'reachGoal', 'vibranniy-poezd-open-pop-up');
        $("#feed form").data("goal", "vibranniy-poezd-submit-pop-up");
    });
});

$(document).on('af_complete', function(event, response) {
    if (response.form.attr('id') === 'quiz') {
        ym(24936983, 'reachGoal', 'kviz-final');
    }

    //Присваиваем атрибут с целью, и при отправке указываем. Т.к. на все случаи одна форма
    if ($("#feed form").data("goal") !== "") {
        ym(24936983, 'reachGoal', $("#feed form").data("goal"));
    }
});