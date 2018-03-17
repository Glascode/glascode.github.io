$(document).ready(function () {

    /* Drop-down menu (narrow width only) */
    var navContainer = $(".nav-container");
    var navToggle = $('#nav-toggle');

    /* Clicking away from dropdown will remove the dropdown class */
    // $("html").on("click", function () {
    //     $(".active nav").hide();
    // });

    /* Toggle open and close nav styles on click */
    navToggle.on("click", function () {
        $("nav ul").slideToggle();
    });

    /* Hamburger to X toggle */
    navToggle.on("click", function() {
        this.classList.toggle("active");
    });

});
