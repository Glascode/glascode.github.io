$(document).ready(function () {
    const SHIFT = 4;

    /* Insert slider */
    $("ul").append('<div id="slider"></div>');

    var slider = $("#slider");
    var currentLink = $('nav ul li a.current');
    var top = currentLink.parent().position().top + SHIFT;
    var width = currentLink.css("width");
    var height = currentLink.css("height");

    currentLink.css("color", "white");

    /* Positioning the slider */
    slider.css({
        "top": top,
        "width": width,
        "height": height
    });

    /* Sliding */
    var link = $('ul li a');
    link.mouseover(function () {
        var top = $(this).parent().position().top + SHIFT;
        var width = $(this).css("width");

        /* Change colours */
        $(this).css("color", "white");
        if ($(this).attr("class") !== "current") {
            currentLink.css("color", "currentColor");
        } else {
            currentLink.css("color", "white");
        }

        /* Move slider */
        slider.stop().animate({
            "top": top,
            "width": width
        }, "fast");
    });

    /* Replace slider on the current link */
    link.mouseout(function () {

        /* Reset variables according to the current link */
        var top = currentLink.parent().position().top + SHIFT;
        var width = currentLink.css("width");

        /* Reset the colours */
        $(this).css("color", "currentColor");
        currentLink.css("color", "white");

        /* Move slider */
        slider.stop().animate({
            "top": top,
            "width": width
        }, "fast");
    });


});
