(function () {
    'use strict';

    // Add shared header and footer as a toolbar.
    $("#header").toolbar();
    $("#footer").toolbar();




    /**
    * Add eventhandler for the navigate back event.
    */
    $('[data-swipeleft="back"]').on("swipeleft", function() {
        window.history.back();
        return false;
    });



    //  /**
    //  * Get a quote from Marvin using jQuery AJAX.
    //  *
    //  * @return void
    //  */
    // window.getMarvinQuoteByAjax = function() {
    //
    //     $.ajax({
    //         url: 'http://dbwebb.se/javascript/lekplats/get-going-with-jquery-ajax/quote.php',
    //         dataType: 'json',
    //
    //         success: function(data){
    //             $('#quote').fadeOut(function() {
    //                 $('#quote').html(data.quote).fadeIn();
    //             });
    //             console.log('.ajax() request returned successfully.');
    //         },
    //
    //         error: function(jqXHR, textStatus, errorThrown){
    //             console.log('.ajax() request failed: ' + textStatus + ', ' + errorThrown);
    //         },
    //     });
    // };





    // $(document).on('pagebeforeshow', '#af-totalt', function(event, data){
    //
    //     $.ajax({
    //         url: "../ajax/arbetsformedlingen/soklista_lan.json",
    //         dataType: "json",
    //
    //         success: function (data) {
    //             soklistaLan = data;
    //
    //             var totalFree = document.getElementById("totalt_antal_ledigajobb");
    //             var totalAds = document.getElementById("totalt_antal_platsannonser");
    //
    //             totalFree.innerHTML = soklistaLan.soklista.totalt_antal_ledigajobb;
    //             totalAds.innerHTML = soklistaLan.soklista.totalt_antal_platsannonser;
    //         },
    //
    //         error: function (/* request, error */) {
    //             console.log('Network error has occurred please try again!');
    //         }
    //     });
    // });
    //
    //  /**
    //  * Update the page showing AF total.
    //  */
    // window.updateAFTotal = function() {
    //     var totalFree = document.getElementById("totalt_antal_ledigajobb");
    //     var totalAds = document.getElementById("totalt_antal_platsannonser");
    //
    //     totalFree.innerHTML = soklistaLan.soklista.totalt_antal_ledigajobb;
    //     totalAds.innerHTML = soklistaLan.soklista.totalt_antal_platsannonser;
    // };
    //
    //  /**
    //  * Cache the JSON objekt.
    //  */
    // var soklistaLan = null;
    // $(document).on('pagebeforeshow', '#af-totalt', function(/* event, data */){
    //
    //     if (soklistaLan !== null) {
    //         window.updateAFTotal();
    //         return;
    //     }
    //
    //     $.ajax({
    //         url: "../ajax/arbetsformedlingen/soklista_lan.json",
    //         dataType: "json",
    //
    //         success: function (data) {
    //             soklistaLan = data;
    //             window.updateAFTotal();
    //         },
    //
    //         error: function (/* request, error */) {
    //             console.log('Network error has occurred please try again!');
    //         }
    //     });
    // });
    //
    //  /**
    //  * Get JSON, if not already available and update AF list,
    //  * before loading page.
    //  */
    // $(document).on('pagebeforeshow', '#af-lista', function(/* event, data */){
    //
    //     if (soklistaLan !== null) {
    //       window.updateAFList();
    //       return;
    //     }
    //
    //     $.ajax({
    //         url: "../pizza/arbetsformedlingen/soklista_lan.json",
    //         dataType: "json",
    //
    //         success: function (data) {
    //             soklistaLan = data;
    //             window.updateAFList();
    //         },
    //
    //         error: function (/* request, error */) {
    //             console.log('Network error has occurred please try again!');
    //         }
    //     });
    // });
    //
    //  /**
    //  * Update AP list with free jobs for each county.
    //  */
    // window.updateAFList = function() {
    //     var list = document.getElementById("af-listview");
    //     var html="";
    //
    //     soklistaLan.soklista.sokdata.forEach(function(row) {
    //         //html += "<li>" + row.namn + " (" + row.antal_ledigajobb + " lediga jobb)</li>";
    //         html += "<li><a href='#af-lista-" + row.id + "'>" + row.namn + " (" + row.antal_ledigajobb + " lediga jobb)</a></li>";
    //     });
    //
    //     list.innerHTML = html;
    //
    //     $('#af-listview').listview('refresh');
    // };
    //
    //  /**
    //  * Display subpage, expect that JSON is already loaded.
    //  */
    // var afSubPageId = null;
    //
    // $(document).on('pagebeforeshow', '#af-sida', function(/*event, data*/){
    //
    //    window.updateAFSubPage(afSubPageId);
    //
    // });
    //
    //  /**
    //  * Update subpage with details from specified county.
    //  */
    // window.updateAFSubPage = function(pageId) {
    //     var element = document.getElementById("af-undersida");
    //     var html="Specified page id not found.";
    //
    //     soklistaLan.soklista.sokdata.forEach(function(row) {
    //         if (row.id == pageId) {
    //             html = "<h1>" + row.namn + "</h1><p>Det finns " + row.antal_ledigajobb + " lediga jobb och " + row.antal_platsannonser + " platsannonser.</p>";
    //             return;
    //         }
    //     });
    //
    //     element.innerHTML = html;
    // };

    //  /**
    //  * Intercept change of page and implement routing.
    //  */
    // $("body").on( "pagecontainerbeforechange", function( event, ui ) {
    //     var to = ui.toPage;
    //     var from = ui.options.fromPage;
    //
    //     // If not a valid pageid
    //     if (typeof to  === 'string') {
    //         var url = $.mobile.path.parseUrl(to);
    //         var toSubPage;
    //
    //         to = url.hash || '#' + url.pathname.substring(1);
    //
    //         if (from) {
    //             from = '#' + from.attr('id');
    //         }
    //
    //         var length = "#af-lista-".length;
    //         toSubPage = to.substring(0, length);
    //
    //         if (from === '#af-lista' && toSubPage === '#af-lista-') {
    //             event.preventDefault();
    //             event.stopPropagation();
    //
    //             afSubPageId = to.substring(length);
    //             console.log("Subpageid = " + afSubPageId);
    //             $(":mobile-pagecontainer").pagecontainer("change", "#af-sida", { foo: "Hello World!" });
    //         }
    //     }
    // });



    /*
    * Pizza code below
    *
    */



    /*
    * function to target count in the shopping cart
    *
    * @param String   countpizza The html-id to target
    * @param String   pizza      The sessionStorage Name
    */
    function shoppingCount (countpizza, pizza) {
        document.getElementById(countpizza).innerHTML = sessionStorage.getItem(pizza);
    }

    /*
    *function to set antal as 0 if sessionStorage doesnt exist
    *
    * @param String   countpizza  The ID to target
    */
    function shoppingCountZero(countpizza) {
      document.getElementById(countpizza).innerHTML = 0;
    }

    /*
    *Function to delete all pizzas in sessionStorage Name
    *
    * @param String   ID      The ID to target
    * @param String   pizza   The sessionStorage name to remove
    */
    function deletePizzaSession(ID, pizza) {
      $(ID).click(function() {
        console.log("du har klickat på att ta bort alla pizza");
        sessionStorage.removeItem(pizza);
      });
    }

    /* Function to delete one pizza
    *
    * @param String   ID          the html ID to target
    * @param String   sessionName the sessionStorage Name to alter
    */
    function minusPizzaSession(ID, sessionName) {
      $(ID).click(function() {
        console.log("du har klickat för att ta bort EN pizza");
        if (sessionStorage.getItem(sessionName) > 0) {
          sessionStorage.setItem(sessionName, Number(sessionStorage.getItem(sessionName) - 1));
        }
      });
    }

    /*
    * Function to push pizza object keys to list view
    *
    * @param String   listID   the id to target
    * @param Object   pizza    the object to push into listID
    */
    function pizzaListInfo(linkID, pizza) {
        var pizzaList = document.getElementById(linkID);
        pizzaList.innerHTML = '<img src="' + pizza.image + '">';
        pizzaList.innerHTML += '<h2>' + pizza.name + '</h2>';
        pizzaList.innerHTML += '<p>' + pizza.topping + '</p>';
        pizzaList.innerHTML += '<p>' + pizza.price + ' kr</p></a>';
        $('<a href="#" id="' + pizza.id + '" data-role="button" data-icon="plus"></a>').insertAfter('#' + linkID);
        //pizzaList.innerHTML += '<a href="#" id="' + pizza.id + '" data-role="button" data-icon="plus"></a>';
    }

    /*
    * Function to push object content to articles
    *
    * @param String   articleID   The article ID to target
    * @param Object   pizza       The bbject to push to the article
    */
    function pizzaArticle(articleID, pizza) {
      var article = document.getElementById(articleID);
      article.innerHTML = '<img src="' + pizza.image + '">';
      article.innerHTML += '<h2 class="special-font">' + pizza.name + '</h2>';
      article.innerHTML += '<p>' + pizza.desc + '</p>';
      article.innerHTML += '<p><b>Innehåller: </b>' + pizza.topping + '</p>';
      article.innerHTML += '<p><b>Pris: </b>' + pizza.price + '</p>';
    }

    /* Funtion to order pizza
    *
    * @param String   orderID         The html ID to target
    * @param String   sessionName     The sessionStorage Name to target
    */
    function pizzaOrder(orderID, sessionName) {
      $(orderID).click(function() {
        if (sessionStorage.getItem(sessionName)) {
          var current = Number(sessionStorage.getItem(sessionName));
          sessionStorage.setItem(sessionName, Number(current + 1));
          console.log('lägger till en pizza');
          console.log('antal är nu: ' + sessionStorage.getItem(sessionName));
        } else {
          sessionStorage.setItem(sessionName, 1);
          console.log("sessionStorage är 1");
        }
      });
    }

    /*
    * Funcion to sort out what get pushed into the shoppingCart
    * This function uses 2 other functions, shoppingCount() and shoppingCountZero()
    *
    * @param String sessionName   The sessionStorage Name to target
    * @param String ID            The html ID to target
    */
    function showOrder(sessionName, ID, totalPrice, pizza) {
      if (sessionStorage.getItem(sessionName)) {
        console.log("händer det här?");
        shoppingCount(ID, sessionName);
        totalPrice = Number(pizza.price * sessionStorage.getItem(sessionName));
        return totalPrice;
      } else {
        shoppingCountZero(ID);
      }
    }


    // create pizza objects
    var bussola = {
      name : "Bussola",
      price : "70",
      image : "img/bussola.jpg",
      topping : "Skinka, räkor",
      id : "order-bussola",
      desc : "Detta är våran sjukt goda Bussolapizza"
    };

    var calzoncino = {
      name : "Calzoncino",
      price : "75",
      image : "img/calzoncino.jpg",
      topping : "Inbakad. Skinka, champinjoner",
      id : "order-calzoncino",
      desc : "Detta är vår populära inbakade pizza Calzoncino"
    };

    var calzone = {
      name : "Calzone",
      price : "65",
      image : "img/calzone.jpg",
      topping : "Inbakad. Skinka",
      id : "order-calzone",
      desc : "Detta är vår inbakade bästsäljare"
    };

    var capricciosa = {
      name : "Capricciosa",
      price : "70",
      image : "img/capricciosa.jpeg",
      topping : "Skinka, champinjoner",
      id : "order-capricciosa",
      desc : "Detta är vår mest sålda pizza och god är den verkligen"
    };

    var hawaiispecial = {
      name : "Hawaii Special",
      price : "80",
      image : "img/hawaii-special.jpg",
      topping : "Skinka, ananas, banan, curry",
      id : "order-hawaiispecial",
      desc : "Detta är en rolig twist på klassikern hawaii"
    };

    var hawaii = {
      name : "Hawaii",
      price : "65",
      image : "img/hawaii.jpg",
      topping : "Skinka, ananas",
      id : "order-hawaii",
      desc : "Den supergoda pizzan Hawaii med uppfriskande ananas"
    };

    var kebabpizza = {
      name : "Kebabpizza",
      price : "75",
      image : "img/kebabpizza.jpg",
      topping : "Lök, tomat, kebab, vitlökssås",
      id : "order-kebabpizza",
      desc : "Är du sugen på kebab? Prova då denna supergoda pizza"
    };

    var margerita = {
      name : "Margerita",
      price : "70",
      image : "img/margerita.png",
      topping : "Tomat, ost",
      id : "order-margerita",
      desc : "Ingrediensinnehållet må inte vara spännande, men låt dig inte luras"
    };

    var marina = {
      name : "Marina",
      price : "70",
      image : "img/marina.jpg",
      topping : "Skinka, räkor, musslor",
      id : "order-marina",
      desc : "Detta är vår populära pizza med inspiration från havet"
    };

    var vesuvio = {
      name : "Vesuvio",
      price : "65",
      image : "img/vesuvio.jpg",
      topping : "Skinka",
      id : "order-vesuvio",
      desc : "En av de mest populära pizzor hos Pizzeria Calzone"
    };




    // fill the meny with pizza objects
    pizzaListInfo("link-bussola", bussola);
    pizzaListInfo("link-calzoncino", calzoncino);
    pizzaListInfo("link-calzone", calzone);
    pizzaListInfo("link-capricciosa", capricciosa);
    pizzaListInfo("link-hawaiispecial", hawaiispecial);
    pizzaListInfo("link-hawaii", hawaii);
    pizzaListInfo("link-kebabpizza", kebabpizza);
    pizzaListInfo("link-margerita", margerita);
    pizzaListInfo("link-marina", marina);
    pizzaListInfo("link-vesuvio", vesuvio);


    // fill individual page about pizzaz
    pizzaArticle("article-bussola", bussola);
    pizzaArticle("article-calzoncino", calzoncino);
    pizzaArticle("article-calzone", calzone);
    pizzaArticle("article-capricciosa", capricciosa);
    pizzaArticle("article-hawaiispecial", hawaiispecial);
    pizzaArticle("article-hawaii", hawaii);
    pizzaArticle("article-kebabpizza", kebabpizza);
    pizzaArticle("article-margerita", margerita);
    pizzaArticle("article-marina", marina);
    pizzaArticle("article-vesuvio", vesuvio);


    /*
    * Click event for ordering pizzas
    * Using the function pizzaOrder
    */
    pizzaOrder("#order-bussola", "bussola");
    pizzaOrder("#order-calzoncino", "calzoncino");
    pizzaOrder("#order-calzone", "calzone");
    pizzaOrder("#order-capricciosa", "capricciosa");
    pizzaOrder("#order-hawaiispecial", "hawaiispecial");
    pizzaOrder("#order-hawaii", "hawaii");
    pizzaOrder("#order-kebabpizza", "kebabpizza");
    pizzaOrder("#order-margerita", "margerita");
    pizzaOrder("#order-marina", "marina");
    pizzaOrder("#order-vesuvio", "vesuvio");

    // Set total price number for pizzaz to 0
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


    // showOrder("bussola", "count-bussola", totalBussola, bussola);
    // showOrder("calzoncino", "count-calzoncino", totalCalzoncino, calzoncino);
    // showOrder("calzone", "count-calzone", totalCalzone, calzone);
    // showOrder("capricciosa", "count-capricciosa", totalCapricciosa, capricciosa);
    // showOrder("hawaiispecial", "count-hawaiispecial", totalHawaiispecial, hawaiispecial);
    // showOrder("hawaii", "count-hawaii", totalHawaii, hawaii);
    // showOrder("kebabpizza", "count-kebabpizza", totalKebabpizza, kebabpizza);
    // showOrder("margerita", "count-margerita", totalMargerita, margerita);
    // showOrder("marina", "count-marina", totalMarina, marina);
    // showOrder("vesuvio", "count-vesuvio", totalVesuvio, vesuvio);

    // sum of all the totalPizzas
    var priceToPay = totalBussola + totalCalzoncino + totalCalzone + totalHawaiispecial + totalHawaii + totalKebabpizza + totalMargerita + totalMarina + totalVesuvio;
    console.log(priceToPay);

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

    // Delete only one pizza if button is clicked.
    minusPizzaSession("#deleteOneBussola", "bussola");
    minusPizzaSession("#deleteOneCalzoncino", "calzoncino");
    minusPizzaSession("#deleteOneCalzone", "calzone");
    minusPizzaSession("#deleteOneCapricciosa", "capricciosa");
    minusPizzaSession("#deleteOneHawaiispecial", "hawaiispecial");
    minusPizzaSession("#deleteOneHawaii", "hawaii");
    minusPizzaSession("#deleteOneKebabpizza", "kebabpizza");
    minusPizzaSession("#deleteOneMargerita", "margerita");
    minusPizzaSession("#deleteOneMarina", "marina");
    minusPizzaSession("#deleteOneVesuvio", "vesuvio");

    // refresh the shopping cart
    $('#refresh').click(function() {
      window.location.reload();
    });

    // clear all the sessionstorage
    $('#clearShoppingcart').click(function() {
      console.log("du har klickat på rensa");
      sessionStorage.clear();
      window.location.reload();
    });


})();
