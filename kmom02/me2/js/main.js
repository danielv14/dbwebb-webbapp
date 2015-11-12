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
            isPortrait = width < height,
            text = "",
            element = document.getElementById("orientationContent");

        text  = "<p>Skärmens storlek är (w x h):<br>" + width + " x " + height;
        text += "<p>Orienteringen är : " + (isPortrait ? "Porträtt" : "Landskap");

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
    $(window).on("click", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "click, ";
    });

    /**
     * Add eventhandler for the swipe event.
     */
    $(window).on("swipe", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swipe, ";
    });

    /**
     * Add eventhandler for the swiperight event.
     */
    $(window).on("swiperight", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swiperight, ";
    });

    /**
     * Add eventhandler for the swipeleft event.
     */
    $(window).on("swipeleft", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "swipeleft, ";
    });

    /**
     * Add eventhandler for the tap event.
     */
    $(window).on("tap", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "tap, ";
    });

    /**
     * Add eventhandler for the taphold event.
     */
    $(window).on("taphold", function(event) {
        var swipeElement = document.getElementById("swipeContent");
        swipeElement.innerHTML += "taphold, ";
    });

})();
