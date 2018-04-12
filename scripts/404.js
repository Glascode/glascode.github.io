$(document).ready(function () {
    var statusButtons = $(".status-buttons");
    statusButtons.mouseover(function () {
        this.classList.add('active');
    });

    statusButtons.mouseout(function () {
        this.classList.remove('active');
    });

    var helpIcon = $(".help-icon");

    helpIcon.mouseover(function () {
        console.log("Mouse entered")
    });

    helpIcon.mouseout(function () {
        console.log("Mouse leaved")
    });
});