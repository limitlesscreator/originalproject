function menu1(alph, type) {
    $.each(alph, function(index, value) {
        $("[data-nav-object=" + type + "] .alphabet_menu li[data-lt='" + value + "']").wrapAll("<div data-l='" + value + "' class='letters' />");
    });
}

$(document).ready(function() {
    if ($(".dekstop_header_wrap").length > 0) {

        $(document).on("click", ".nav li i", function(e) {
            $(this).parent().toggleClass("active").siblings("li").removeClass("active");
        });

        var alph = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Э", "Ю", "Я"];
        menu1(alph, "import");
        menu1(alph, "export");

        $("[name=import_ms]").on("change", function() {
            $("#nav_ajax_import").html("<div class='loader'></div>");

            $.post("/ajax/", {
                action: "set_menu_ajax",
                type: $(this).val(),
                extra: $(this).data("title"),
                id: $(this).data("id")
            }, function(data) {
                $("#nav_ajax_import").html(data);
                menu1(alph, "import");
            });
        });

        $("[name=export_ms]").on("change", function() {

            $("#nav_ajax_export").html("<div class='loader'></div>");

            $.post("/ajax/", {
                action: "set_menu_ajax",
                type: $(this).val(),
                extra: $(this).data("title"),
                id: $(this).data("id")
            }, function(data) {
                $("#nav_ajax_export").html(data);
                menu1(alph, "export");
            });
        });

        $(".nav_control span").on("click", function() {
            var t = $(this).data("nav-target");

            $(".nav").show();
            $("body").addClass("fix");

            $(".nav_control span[data-nav-target=" + t + "]").addClass("active").siblings("span").removeClass("active");
            $(".nav_tabs .nav_wrap").removeClass("active");
            $(".nav_tabs .nav_wrap[data-nav-object=" + t + "]").addClass("active");
            $(".nav li i").removeClass("active");
            $(".nav .parent ul").slideUp("fast");
        });

        $(".fh_menu li").on("click", function() {
            var t = $(this).data("nav-target");
            $(".dekstop_header_wrap .nav").addClass("active");
            $(".nav_control span[data-nav-target=" + t + "]").addClass("active").siblings("span").removeClass("active");
            $(".nav_tabs .nav_wrap").removeClass("active");
            $(".nav_tabs .nav_wrap[data-nav-object=" + t + "]").addClass("active");
            $(".nav").show();
        });

        $(".header_menu_toggle").on("click", function() {
            $(".nav").show();
            $("body").addClass("fix");
        });

        $(".nav button").on("click", function() {
            $(".nav").hide();
            $("body").removeClass("fix");
        });

    } else {
        $(".mheader_menu_toggle").on("click", function() {
            $(".nav_control").show("drop", {
                direction: "right"
            }, 300);
        });

        $(".menu_back").on("click", function() {
            $(this).parent().hide("drop", {
                direction: "right"
            }, 300);
            $(".nav_tabs .lvl2 i").removeClass("active").siblings("ul").slideUp();
        });

        $(".menu_close_all").on("click", function() {
            $(".nav ul").hide();
            $(".nav_tabs .lvl2 i").removeClass("active").siblings("ul").slideUp();
        });

        $("[data-nav-target]").on("click", function() {
            var t = $(this).data("nav-target");
            $("[data-nav-object=" + t + "]").show("drop", {
                direction: "right"
            }, 300);
        });

        $(".nav_tabs .lvl1.parent > a").on("click", function(e) {
            e.preventDefault();
            $(this).siblings("ul").show("drop", {
                direction: "right"
            }, 300);
        });

        $(".nav_tabs .lvl2 i").on("click", function(e) {
            $(this).toggleClass("active").siblings("ul").slideToggle().parent().siblings("li").find("i").removeClass("active").siblings("ul").slideUp();
        });
    }
});