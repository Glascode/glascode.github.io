function addScrollListeners() {

    /* Cache selectors */
    var lastId;
    var $header = $('.header');
    var HEADER_HEIGHT = $header.outerHeight() + 1;

    /* Placing content */
    $content = $('.content');

    /* All list items */
    var $navLinks = $('.nav-link');

    /* Anchors corresponding to menu items */
    var scrollItems = $navLinks.map(function () {
        var $item = $($(this).attr('href'));
        if ($item.length) {
            return $item;
        }
    });

    /* Bind click handler to menu items for a fancy scroll animation */
    const SCROLL_SPEED = 400;
    $navLinks.click(function (e) {
        var $href = $(this).attr('href');
        var offsetTop = $href === '#' ? 0 : $($href).offset().top - HEADER_HEIGHT + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, SCROLL_SPEED);
        e.preventDefault();
    });

    /* Bind to scroll */
    $(window).scroll(function () {

        /* Get container scroll position */
        var windowTop = $(this).scrollTop() + HEADER_HEIGHT;

        /* Get id of current scroll item */
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < windowTop) {
                return this;
            }
        });

        /* Get the id of the current element */
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : '';

        if (lastId !== id) {
            lastId = id;

            /* Set or remove active class */
            $navLinks.removeClass('current');
            $navLinks.filter("[href='#" + id + "']").addClass('current');
        }

        /* Navigation shadow */
        $navigation = $(".navigation");
        if ($(window).width() > 800) {
            if ($navigation.offset().top > HEADER_HEIGHT) {
                $navigation.addClass('shadow');
            } else {
                $navigation.removeClass('shadow');
            }
        }
    });

}

function openMenu() {
    $('body').addClass('active');
}

function closeMenu() {
    $('body').removeClass('active');
}

function toggleMenu() {
    if ($('body').hasClass('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function addMobileMenuListeners() {
    $('#hamburger-container').on('click', function () {
        toggleMenu();
    });

    $('.nav-item, .content').on('click', function () {
        closeMenu();
    });
}

function loadImages() {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

$(document).ready(function () {
    loadImages();
    addScrollListeners();
    addMobileMenuListeners();
});
