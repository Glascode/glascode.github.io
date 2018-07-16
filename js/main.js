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

    $(".content").css("margin-top", $headerHeight + SPACE);

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
        if ($(window).scrollTop() > 0) {
            $header.css("box-shadow", "0 0 1px rgba(0, 0, 0, 0.25)");
        } else {
            $header.css("box-shadow", "none");
        }
    });

}

$(document).ready(function () {
    initPage();

    const $headerHeight = $(".header").height();

    $("#hamburger-container").on("click", function () {
        toggleMenu($headerHeight);
    });

    $(".content").on("click", function () {
        closeMenu($headerHeight);
    });

    $(".nav-item").on("click", function () {
        closeMenu($headerHeight);
    });
});

function toggleMenu(headerHeight) {
    if ($(".header").height() <= headerHeight) {
        openMenu();
    } else {
        closeMenu(headerHeight);
    }
}

function openMenu() {
    $(".header").outerHeight("+=150");
    $("#hamburger-container").addClass("active");
}

function closeMenu(headerHeight) {
    $(".header").height(headerHeight);
    $("#hamburger-container").removeClass("active");
}
