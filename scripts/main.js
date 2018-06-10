$(document).ready(function () {

    /* Cache selectors */
    var lastId;
    var $header = $(".header");
    var $headerHeight = $header.outerHeight() + 1;

    $(".content").css("margin-top", $headerHeight);

    /* All list items */
    var $navLinks = $(".nav--link");

    /* Anchors corresponding to menu items */
    var scrollItems = $navLinks.map(function () {
        var $item = $($(this).attr("href"));
        if ($item.length) {
            return $item;
        }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    $navLinks.click(function (e) {
        var href = $(this).attr("href");
        var offsetTop = href === "#" ? 0 : $(href).offset().top - $headerHeight + 1;
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, 850);
        e.preventDefault();
    });

    /* Bind to scroll */
    $(window).scroll(function () {
        // Get container scroll position
        var $windowTop = $(this).scrollTop() + $headerHeight;
        const SHIFT = 200;
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < $windowTop + SHIFT)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            /* Set or remove active class */
            $navLinks.removeClass("current");
            $navLinks.filter("[href='#" + id + "']").addClass("current");
        }
    });
});