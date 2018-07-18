function initPage() {

    /* Cache selectors */
    var lastId;
    var $header = $(".header");
    var $headerHeight = $header.outerHeight() + 1;
    var SPACE;

    if ($(window).width() > 800) {
        SPACE = 100;
    } else {
        SPACE = 50;
    }

    $content =  $(".content");
    $content.css("margin-top", $headerHeight);
    $content.css("padding-top", SPACE);

    /* All list items */
    var $navLinks = $(".nav-link");

    /* Anchors corresponding to menu items */
    var scrollItems = $navLinks.map(function () {
        var $item = $($(this).attr("href"));
        if ($item.length) {
            return $item;
        }
    });

    /* Bind click handler to menu items for a fancy scroll animation */
    const SCROLL_SPEED = 400;
    $navLinks.click(function (e) {
        var href = $(this).attr("href");
        var offsetTop = href === "#" ? 0 : $(href).offset().top - $headerHeight + 1;
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, SCROLL_SPEED);
        e.preventDefault();
    });

    /* Bind to scroll */
    $(window).scroll(function () {

        /* Get container scroll position */
        var $windowTop = $(this).scrollTop() + $headerHeight;

        /* Get id of current scroll item */
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < $windowTop) {
                return this;
            }
        });

        /* Get the id of the current element */
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            /* Set or remove active class */
            $navLinks.removeClass("current");
            $navLinks.filter("[href='#" + id + "']").addClass("current");
        }

        /* Header shadow */
        if ($(window).width() > 800) {
            if ($(window).scrollTop() > 0) {
                $header.css("box-shadow", "0 0 1px rgba(0, 0, 0, 0.25)");
            } else {
                $header.css("box-shadow", "none");
            }
        }
    });

}

$(document).ready(function () {
    initPage();

    $("#hamburger-container").on("click", function () {
        toggleMenu();
    });

    $(".nav-item, .content").on("click", function () {
        closeMenu();
    });
});

function toggleMenu() {
    if ($("body").hasClass("active")) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    $("body").addClass("active");
}

function closeMenu() {
    $("body").removeClass("active");
}
