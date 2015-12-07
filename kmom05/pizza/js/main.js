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

    // var bussola = {
    //   name : "Bussola",
    //   price : "70",
    // };
    //
    // var calzoncino = {
    //   name : "Calzoncino",
    //   price : "75"
    // };
    //
    // var capricciosa = {
    //   name : "Capricciosa",
    //   price : "70"
    // };
    //
    // var hawaiispecial = {
    //   name : "Hawaii Special",
    //   price : "80"
    // };
    //
    // var hawaii = {
    //   name : "Hawaii",
    //   price : "65"
    // };
    //
    // var kebabpizza = {
    //   name : "Kebabpizza",
    //   price : "75"
    // };
    //
    // var margerita = {
    //   name : "Margerita",
    //   price : "70"
    // };
    //
    // var marina = {
    //   name : "Marina",
    //   price : "70"
    // };
    //
    // var vesuvio = {
    //   name : "Vesuvio",
    //   price : "65"
    // };
    //
    // var calzone = {
    //   name : "Calzone",
    //   price : "65"
    // };


    // Pizzeria Code here

    // // Function to set sessionStorage
    // function setSessionStorage(pizzaName, pizzaPrice, sessionName, sessionValue) {
    //   var pizza = String(pizzaName);
    //   var price = String(pizzaPrice);
    //   console.log(pizza);
    //   console.log(price);
    //   sessionStorage.setItem(String(pizza), String(price));
    // }

    // Append sessionStorage
    // function appendSession(pizza) {
    //   console.log("finns jag?");
    //   if (sessionStorage.pizza) {
    //     sessionStorage.pizza = Number(sessionStorage.pizza) + 1;
    //   } else {
    //     sessionStorage.pizza = 1;
    //   }
    //   console.log(sessionStorage.pizza);
    //   return sessionStorage.pizza;
    // }

    /*
    * function to target count in the shopping cart
    * @param String countpizza The html-id to target
    * @param String pizza The sessionStorage Name
    */
    function shoppingCount (countpizza, pizza) {
        document.getElementById(countpizza).innerHTML = sessionStorage.getItem(pizza);
    }


    // Nested object för att visa kundvagnen?
    //http://stackoverflow.com/questions/7942398/nested-objects-in-javascript-best-practices
    var shoppingCart = {
      total : "0kr"
    }

    console.log(shoppingCart)


    // Rensa beställningen
    $('#rensa').click(function() {
      console.log("du har klickat");
    })

    // beställ Bussola
    $('#order-bussola').click(function() {
      console.log("du har klickat på bussola");
      if (sessionStorage.bussola) {
        sessionStorage.bussola = Number(sessionStorage.bussola) + 1;
      } else {
        sessionStorage.setItem('bussola', 1);
      }
    })

    // beställ Calzone
    $('#order-calzone').click(function() {
      console.log("du har klickat på bussola");
      if (sessionStorage.calzone) {
        sessionStorage.calzone = Number(sessionStorage.calzone) + 1;
      } else {
        sessionStorage.setItem('calzone', 1);
      }
    })
    // beställ calzoncino
    $('#order-calzoncino').click(function() {
      if (sessionStorage.calzoncino) {
        sessionStorage.calzoncino = Number(sessionStorage.calzoncino) + 1;
      } else {
        sessionStorage.setItem('calzoncino', 1);
      }
    })
    // beställ capricciosa
    $('#order-capricciosa').click(function() {
      if (sessionStorage.capricciosa) {
        sessionStorage.capricciosa = Number(sessionStorage.capricciosa) + 1;
      } else {
        sessionStorage.setItem('capricciosa', 1);
      }
    })

    // beställ hawaii-special
    $('#order-hawaiispecial').click(function() {
      if (sessionStorage.hawaiispecial) {
        sessionStorage.hawaiispecial = Number(sessionStorage.hawaiispecial) + 1;
      } else {
        sessionStorage.setItem('hawaiispecial', 1);
      }
    })

    // beställ hawaii
    $('#order-hawaii').click(function() {
      if (sessionStorage.hawaii) {
        sessionStorage.hawaii = Number(sessionStorage.hawaii) + 1;
      } else {
        sessionStorage.setItem('hawaii', 1);
      }
    })

    // beställ kebabpizza
    $('#order-kebabpizza').click(function() {
      if (sessionStorage.kebabpizza) {
        sessionStorage.kebabpizza = Number(sessionStorage.kebabpizza) + 1;
      } else {
        sessionStorage.setItem('kebabpizza', 1);
      }
    })

    // beställ margerita
    $('#order-margerita').click(function() {
      if (sessionStorage.margerita) {
        sessionStorage.margerita = Number(sessionStorage.margerita) + 1;
      } else {
        sessionStorage.setItem('margerita', 1);
      }
    })

    // beställ marina
    $('#order-marina').click(function() {
      if (sessionStorage.marina) {
        sessionStorage.marina = Number(sessionStorage.marina) + 1;
      } else {
        sessionStorage.setItem('marina', 1);
      }
    })

    // beställ vesuvio
    $('#order-vesuvio').click(function() {
      if (sessionStorage.vesuvio) {
        sessionStorage.vesuvio = Number(sessionStorage.vesuvio) + 1;
      } else {
        sessionStorage.setItem('vesuvio', 1);
      }
    })





    // show how many pizzaz in the shopping bag, using the function targetCount
    shoppingCount("count-bussola", "bussola");
    shoppingCount("count-calzone", "calzone");
    shoppingCount("count-calzoncino", "calzoncino");
    shoppingCount("count-capricciosa", "capricciosa");
    shoppingCount("count-hawaiispecial", "hawaiispecial");
    shoppingCount("count-hawaii", "hawaii");
    shoppingCount("count-kebabpizza", "kebabpizza");
    shoppingCount("count-margerita", "margerita");
    shoppingCount("count-marina", "marina");
    shoppingCount("count-vesuvio", "vesuvio");








    // Set total sum to pay
    document.getElementById("total").innerHTML = sessionStorage.getItem("bussola");




    // function for google maps on contact view
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
