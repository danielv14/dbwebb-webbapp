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




    // Pizzeria Code here


    /*
    * function to target count in the shopping cart
    * @param String countpizza The html-id to target
    * @param String pizza The sessionStorage Name
    */
    function shoppingCount (countpizza, pizza) {
        document.getElementById(countpizza).innerHTML = sessionStorage.getItem(pizza);
    }

    /*
    *function to set antal as 0 if sessionStorage doesnt exist
    * @param String countpizza the ID to target
    */
    function shoppingCountZero(countpizza) {
      document.getElementById(countpizza).innerHTML = 0;
    }

    /*
    *Function to delete individual sessionStorage
    * @param String ID The ID to target
    * @param String pizza the sessionStorage name to remove
    */
    function deletePizzaSession(ID, pizza) {
      $(ID).click(function() {
        console.log("du har klickat på att ta bort en pizza");
        sessionStorage.removeItem(pizza);
      });


    }

    // create pizza objects
    var bussola = {
      name : "Bussola",
      price : "70",
    };

    var calzoncino = {
      name : "Calzoncino",
      price : "75"
    };

    var capricciosa = {
      name : "Capricciosa",
      price : "70"
    };

    var hawaiispecial = {
      name : "Hawaii Special",
      price : "80"
    };

    var hawaii = {
      name : "Hawaii",
      price : "65"
    };

    var kebabpizza = {
      name : "Kebabpizza",
      price : "75"
    };

    var margerita = {
      name : "Margerita",
      price : "70"
    };

    var marina = {
      name : "Marina",
      price : "70"
    };

    var vesuvio = {
      name : "Vesuvio",
      price : "65"
    };

    var calzone = {
      name : "Calzone",
      price : "65"
    };




    /*
    * Click event for ordering pizzas
    */

    // order Bussola
    $('#order-bussola').click(function() {
      if (sessionStorage.bussola) {
        sessionStorage.bussola = Number(sessionStorage.bussola) + 1;
      } else {
        sessionStorage.setItem('bussola', 1);
      }
    });

    // order Calzone
    $('#order-calzone').click(function() {
      if (sessionStorage.calzone) {
        sessionStorage.calzone = Number(sessionStorage.calzone) + 1;
      } else {
        sessionStorage.setItem('calzone', 1);
      }
    });
    // order calzoncino
    $('#order-calzoncino').click(function() {
      if (sessionStorage.calzoncino) {
        sessionStorage.calzoncino = Number(sessionStorage.calzoncino) + 1;
      } else {
        sessionStorage.setItem('calzoncino', 1);
      }
    });
    // order capricciosa
    $('#order-capricciosa').click(function() {
      if (sessionStorage.capricciosa) {
        sessionStorage.capricciosa = Number(sessionStorage.capricciosa) + 1;
      } else {
        sessionStorage.setItem('capricciosa', 1);
      }
    });

    // order hawaii-special
    $('#order-hawaiispecial').click(function() {
      if (sessionStorage.hawaiispecial) {
        sessionStorage.hawaiispecial = Number(sessionStorage.hawaiispecial) + 1;
      } else {
        sessionStorage.setItem('hawaiispecial', 1);
      }
    });

    // order hawaii
    $('#order-hawaii').click(function() {
      if (sessionStorage.hawaii) {
        sessionStorage.hawaii = Number(sessionStorage.hawaii) + 1;
      } else {
        sessionStorage.setItem('hawaii', 1);
      }
    });

    // order kebabpizza
    $('#order-kebabpizza').click(function() {
      if (sessionStorage.kebabpizza) {
        sessionStorage.kebabpizza = Number(sessionStorage.kebabpizza) + 1;
      } else {
        sessionStorage.setItem('kebabpizza', 1);
      }
    });

    // order margerita
    $('#order-margerita').click(function() {
      if (sessionStorage.margerita) {
        sessionStorage.margerita = Number(sessionStorage.margerita) + 1;
      } else {
        sessionStorage.setItem('margerita', 1);
      }
    });

    // order marina
    $('#order-marina').click(function() {
      if (sessionStorage.marina) {
        sessionStorage.marina = Number(sessionStorage.marina) + 1;
      } else {
        sessionStorage.setItem('marina', 1);
      }
    });

    // order vesuvio
    $('#order-vesuvio').click(function() {
      if (sessionStorage.vesuvio) {
        sessionStorage.vesuvio = Number(sessionStorage.vesuvio) + 1;
      } else {
        sessionStorage.setItem('vesuvio', 1);
      }
    });

    // Set total number for pizzaz to 0
    var totalBussola = 0 ;
    var totalCalzoncino = 0;
    var totalCalzone = 0;
    var totalCapricciosa = 0;
    var totalHawaiispecial = 0;
    var totalHawaii = 0;
    var totalKebabpizza = 0;
    var totalMargerita = 0;
    var totalMarina = 0;
    var totalVesuvio = 0;

    // show how many pizzaz in the shopping bag, using the function targetCount
    if (sessionStorage.bussola) {
      shoppingCount("count-bussola", "bussola");
      totalBussola = Number(bussola.price * sessionStorage.bussola);
    } else {
      shoppingCountZero("count-bussola");
    }

    if (sessionStorage.calzoncino) {
      shoppingCount("count-calzoncino", "calzoncino");
      totalCalzoncino = Number(calzoncino.price * sessionStorage.calzoncino);
    } else {
      shoppingCountZero("count-calzoncino");
    }

    if (sessionStorage.calzone) {
      shoppingCount("count-calzone", "calzone");
      totalCalzone = Number(calzone.price * sessionStorage.calzone);
    } else {
      shoppingCountZero("count-calzone");
    }

    if (sessionStorage.capricciosa) {
      shoppingCount("count-capricciosa", "capricciosa");
      totalCapricciosa = Number(capricciosa.price * sessionStorage.capricciosa);
    } else {
      shoppingCountZero("count-capricciosa");
    }

    if (sessionStorage.hawaiispecial) {
      shoppingCount("count-hawaiispecial", "hawaiispecial");
      totalHawaiispecial = Number(hawaiispecial.price * sessionStorage.hawaiispecial);
    } else {
      shoppingCountZero("count-hawaiispecial");
    }

    if (sessionStorage.hawaii) {
      shoppingCount("count-hawaii", "hawaii");
      totalHawaii = Number(hawaii.price * sessionStorage.hawaii);
    } else {
      shoppingCountZero("count-hawaii");
    }

    if (sessionStorage.kebabpizza) {
      shoppingCount("count-kebabpizza", "kebabpizza");
      totalKebabpizza = Number(kebabpizza.price * sessionStorage.kebabpizza);
    } else {
      shoppingCountZero("count-kebabpizza");
    }

    if (sessionStorage.margerita) {
      shoppingCount("count-margerita", "margerita");
      totalMargerita = Number(margerita.price * sessionStorage.margerita);
    } else {
      shoppingCountZero("count-margerita");
    }

    if (sessionStorage.marina) {
      shoppingCount("count-marina", "marina");
      totalMarina = Number(marina.price * sessionStorage.marina);
    } else {
      shoppingCountZero("count-marina");
    }

    if (sessionStorage.vesuvio) {
      shoppingCount("count-vesuvio", "vesuvio");
      totalVesuvio = Number(vesuvio.price * sessionStorage.vesuvio);
    } else {
      shoppingCountZero("count-vesuvio");
    }


    // sum of all the totalPizzas
    var priceToPay = totalBussola + totalCalzoncino + totalCalzone + totalHawaiispecial + totalHawaii + totalKebabpizza + totalMargerita + totalMarina + totalVesuvio;

    document.getElementById("total").innerHTML = priceToPay + ' kr';





    // delete individual sessionStorage if the buttons are clicked.
    // if not the functions below does nothing.
    deletePizzaSession("#deleteBussola", "bussola");
    deletePizzaSession("#deleteCalzoncino", "calzoncino");
    deletePizzaSession("#deleteCalzone", "calzone");
    deletePizzaSession("#deleteCapricciosa", "capricciosa");
    deletePizzaSession("#deleteHawaiispecial", "hawaiispecial");
    deletePizzaSession("#deleteHawaii", "hawaii");
    deletePizzaSession("#deleteKebabpizza", "kebabpizza");
    deletePizzaSession("#deleteMargerita", "margerita");
    deletePizzaSession("#deleteMarina", "marina");
    deletePizzaSession("#deleteVesuvio", "vesuvio");


    // refresh the shopping cart
    $('#refresh').click(function() {
    location.reload();
    });

    // clear all the sessionstorage
    $('#clearShoppingcart').click(function() {
      console.log("du har klickat på rensa");
      sessionStorage.clear();
      location.reload();
    });





    // // function for google maps on contact view
    // function initMap() {
    //   var myLatLng = {lat: 63.827894, lng: 20.256578};
    //
    //   var map = new google.maps.Map(document.getElementById('googleMap'), {
    //     zoom: 15,
    //     center: myLatLng
    //   });
    //
    //   var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: 'Hello World!'
    //   });
    // }
    //
    // initMap();


})();
