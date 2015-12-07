(function () {
    'use strict';

    // Add shared header and footer as a toolbar.
    $("#header").toolbar();
    $("#footer").toolbar();

    // Add shared panel as a panel.
    $("#menu").panel().enhanceWithin();



    /**
    * Add eventhandler for the navigate back event.
    */
    $('[data-swipeleft="back"]').on("swipeleft", function() {
        window.history.back();
        return false;
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
            url: "../pizza/arbetsformedlingen/soklista_lan.json",
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


    // Pizzeria Code here


    // function for google maps on contact
    function initMap() {
      var myLatLng = {lat: 63.827894, lng: 20.256578};

      var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 15,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    }

    initMap();

})();
