(function () {
    'use strict';

    // Add shared header and footer as a toolbar.
    $("#header").toolbar();
    $("#footer").toolbar();

    // Add shared panel as a panel.
    $("#menu").panel().enhanceWithin();

    /**
     * Check the orientation and size of the screen.
     *
     * @return void
     */
    window.checkSizeAndOrientation = function() {
        var width = window.screen.width,
            height = window.screen.height,
            availwidth = window.screen.availWidth,
            availheigth = window.screen.availHeight,
            availleft = window.screen.availLeft,
            colordepth = window.screen.colorDepth,
            pixeldepth = window.screen.pixelDepth,
            isPortrait = width < height,
            text = "",
            element = document.getElementById("orientationContent");

        text  = "<p>Skärmens storlek är (w x h):<br>" + width + " x " + height;
        text += "<p>Orienteringen är : " + (isPortrait ? "Porträtt" : "Landskap");
        text += "<p>AvailWidth är : " + availwidth + " pixlar";
        text += "<p>AvailHeight är : " + availheigth + " pixlar";
        text += "<p>AvailLeft är : " + availleft + " pixlar";
        text += "<p>ColorDepth är : " + colordepth;
        text += "<p>PixelDepth är : " + pixeldepth;


        element.innerHTML = text;
    };

    /**
     * Add eventhandler for the onresize event.
     */
    window.onresize = function() {
        window.checkSizeAndOrientation();
    };
    // Call the function one to write out current orientation
    window.checkSizeAndOrientation();

    /**
     * Add eventhandler for the click event.
     */
    $(window).on("click", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "click, ";
    });

    /**
     * Add eventhandler for the swipe event.
     */
    $(window).on("swipe", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swipe, ";
    });

    /**
     * Add eventhandler for the swiperight event.
     */
    $(window).on("swiperight", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swiperight, ";
    });

    /**
     * Add eventhandler for the swipeleft event.
     */
    $(window).on("swipeleft", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swipeleft, ";
    });

    /**
     * Add eventhandler for the tap event.
     */
    $(window).on("tap", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "tap, ";
    });

    /**
     * Add eventhandler for the taphold event.
     */
    $(window).on("taphold", function() {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "taphold, ";
    });

    /**
     * Add eventhandler for the touch event.
     */
    $(window).on("touchstart", function() {
        var touchElement = document.getElementById("touchContent");
        touchElement.innerHTML += "touchstart, ";
    });

    /**
     * Add eventhandler for the touch event.
     */
    $(window).on("touchend", function() {
        var touchElement = document.getElementById("touchContent");
        touchElement.innerHTML += "touchend, ";
    });

    // Init canvas
    var canvas = document.getElementById("draw");
    var ctx = canvas.getContext("2d");

    /**
     * Add eventhandler for click on canvas.
     */
    $('#draw').on("click", function(event) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(event.offsetX-5, event.offsetY-5, 10, 10);
    });

    /**
     * Add eventhandler for click on canvas.
     */
     $('#draw').on("touchmove", function(event) {
        event.preventDefault();
        //console.log(event);
        var offsetX = canvas.offsetLeft;
        var offsetY = canvas.offsetTop;
        var x = event.originalEvent.changedTouches[ 0 ].clientX - offsetX;
        var y = event.originalEvent.changedTouches[ 0 ].clientY - offsetY;
        //console.log("pos " + x + "x" + y);
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(x-5, y-5, 10, 10);
    });

    /**
    * Add eventhandler for the navigate back event.
    */
    $('[data-swipeleft="back"]').on("swipeleft", function() {
        window.history.back();
        return false;
    });

    /**
     * Add eventhandler for the clickevent as part of own test
     */
    $(window).on("click", function() {

        $("#clickToby").toggleClass("round");

    });


})();
