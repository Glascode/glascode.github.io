$(document).ready(function () {
    var helpIcon = $(".help-icon");

    helpIcon.mouseover(function () {
        console.log("Mouse entered")
    });

    helpIcon.mouseout(function () {
        console.log("Mouse leaved")
    });
});