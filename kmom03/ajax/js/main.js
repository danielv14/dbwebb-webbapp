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


     /**
     * Get a quote from Marvin using jQuery AJAX.
     *
     * @return void
     */
    window.getMarvinQuoteByAjax = function() {

        $.ajax({
            url: 'http://dbwebb.se/javascript/lekplats/get-going-with-jquery-ajax/quote.php',
            dataType: 'json',

            success: function(data){
                $('#quote').fadeOut(function() {
                    $('#quote').html(data.quote).fadeIn();
                });
                console.log('.ajax() request returned successfully.');
            },

            error: function(jqXHR, textStatus, errorThrown){
                console.log('.ajax() request failed: ' + textStatus + ', ' + errorThrown);
            },
        });
    };

    // Add eventlistener for click in a link
    var ajax = document.getElementById("ajax");
    ajax.addEventListener("click", window.getMarvinQuoteByAjax);


    /**
     * Get a quote from Marvin using jQuery getJSON.
     *
     * @return void
     */
    window.getMarvinQuoteByGetJSON = function() {

        var url = "http://dbwebb.se/javascript/lekplats/get-going-with-jquery-ajax/quote.php";

        $.getJSON(url, function(data){
          $('#quote').fadeOut(function() {
            $('#quote').html(data.quote).fadeIn();
          });
          console.log('.getJSON() request returned successfully.');
        });
    };

    // Add eventlistener for click in a link
    var getjson = document.getElementById("getjson");
    getjson.addEventListener("click", window.getMarvinQuoteByGetJSON);



    $(document).on('pagebeforeshow', '#af-totalt', function(event, data){

        $.ajax({
            url: "../ajax/arbetsformedlingen/soklista_lan.json",
            dataType: "json",

            success: function (data) {
                soklistaLan = data;

                var totalFree = document.getElementById("totalt_antal_ledigajobb");
                var totalAds = document.getElementById("totalt_antal_platsannonser");

                totalFree.innerHTML = soklistaLan.soklista.totalt_antal_ledigajobb;
                totalAds.innerHTML = soklistaLan.soklista.totalt_antal_platsannonser;
            },

            error: function (/* request, error */) {
                console.log('Network error has occurred please try again!');
            }
        });
    });

     /**
     * Update the page showing AF total.
     */
    window.updateAFTotal = function() {
        var totalFree = document.getElementById("totalt_antal_ledigajobb");
        var totalAds = document.getElementById("totalt_antal_platsannonser");

        totalFree.innerHTML = soklistaLan.soklista.totalt_antal_ledigajobb;
        totalAds.innerHTML = soklistaLan.soklista.totalt_antal_platsannonser;
    };

     /**
     * Cache the JSON objekt.
     */
    var soklistaLan = null;
    $(document).on('pagebeforeshow', '#af-totalt', function(/* event, data */){

        if (soklistaLan !== null) {
            window.updateAFTotal();
            return;
        }

        $.ajax({
            url: "../ajax/arbetsformedlingen/soklista_lan.json",
            dataType: "json",

            success: function (data) {
                soklistaLan = data;
                window.updateAFTotal();
            },

            error: function (/* request, error */) {
                console.log('Network error has occurred please try again!');
            }
        });
    });

     /**
     * Get JSON, if not already available and update AF list,
     * before loading page.
     */
    $(document).on('pagebeforeshow', '#af-lista', function(/* event, data */){

        if (soklistaLan !== null) {
          window.updateAFList();
          return;
        }

        $.ajax({
            url: "../ajax/arbetsformedlingen/soklista_lan.json",
            dataType: "json",

            success: function (data) {
                soklistaLan = data;
                window.updateAFList();
            },

            error: function (/* request, error */) {
                console.log('Network error has occurred please try again!');
            }
        });
    });

     /**
     * Update AP list with free jobs for each county.
     */
    window.updateAFList = function() {
        var list = document.getElementById("af-listview");
        var html="";

        soklistaLan.soklista.sokdata.forEach(function(row) {
            //html += "<li>" + row.namn + " (" + row.antal_ledigajobb + " lediga jobb)</li>";
            html += "<li><a href='#af-lista-" + row.id + "'>" + row.namn + " (" + row.antal_ledigajobb + " lediga jobb)</a></li>";
        });

        list.innerHTML = html;

        $('#af-listview').listview('refresh');
    };

     /**
     * Display subpage, expect that JSON is already loaded.
     */
    var afSubPageId = null;

    $(document).on('pagebeforeshow', '#af-sida', function(/*event, data*/){

       window.updateAFSubPage(afSubPageId);

    });

     /**
     * Update subpage with details from specified county.
     */
    window.updateAFSubPage = function(pageId) {
        var element = document.getElementById("af-undersida");
        var html="Specified page id not found.";

        soklistaLan.soklista.sokdata.forEach(function(row) {
            if (row.id == pageId) {
                html = "<h1>" + row.namn + "</h1><p>Det finns " + row.antal_ledigajobb + " lediga jobb och " + row.antal_platsannonser + " platsannonser.</p>";
                return;
            }
        });

        element.innerHTML = html;
    };

     /**
     * Intercept change of page and implement routing.
     */
    $("body").on( "pagecontainerbeforechange", function( event, ui ) {
        var to = ui.toPage;
        var from = ui.options.fromPage;

        // If not a valid pageid
        if (typeof to  === 'string') {
            var url = $.mobile.path.parseUrl(to);
            var toSubPage;

            to = url.hash || '#' + url.pathname.substring(1);

            if (from) {
                from = '#' + from.attr('id');
            }

            var length = "#af-lista-".length;
            toSubPage = to.substring(0, length);

            if (from === '#af-lista' && toSubPage === '#af-lista-') {
                event.preventDefault();
                event.stopPropagation();

                afSubPageId = to.substring(length);
                console.log("Subpageid = " + afSubPageId);
                $(":mobile-pagecontainer").pagecontainer("change", "#af-sida", { foo: "Hello World!" });
            }
        }
    });




})();
