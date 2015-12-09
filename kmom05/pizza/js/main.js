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
    * @param String   countpizza  The html-id to target
    * @param String   pizza       The window.sessionStorage Name
    */
    function shoppingCount (countpizza, pizza) {
        document.getElementById(countpizza).innerHTML = window.sessionStorage.getItem(pizza);
    }

    /*
    *function to set antal as 0 if window.sessionStorage doesnt exist
    *
    * @param String   countpizza  The ID to target
    */
    function shoppingCountZero(countpizza) {
      document.getElementById(countpizza).innerHTML = 0;
    }

    /*
    *Function to delete all pizzas in window.sessionStorage Name
    *
    * @param String   ID      The ID to target
    * @param String   pizza   The window.sessionStorage name to remove
    */
    function deletePizzaSession(ID, pizza) {
      $(ID).click(function() {
        console.log("du har klickat på att ta bort alla pizza");
        window.sessionStorage.removeItem(pizza);
      });
    }

    /* Function to delete one pizza
    *
    * @param String   ID            the html ID to target
    * @param String   sessionName   the window.sessionStorage Name to alter
    */
    function minusPizzaSession(ID, sessionName) {
      $(ID).click(function() {
        console.log("du har klickat för att ta bort EN pizza");
        // check if pizza count is above 0
        if (window.sessionStorage.getItem(sessionName) > 0) {
          window.sessionStorage.setItem(sessionName, Number(window.sessionStorage.getItem(sessionName) - 1));
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
    * @param String   sessionName     The window.sessionStorage Name to target
    */
    function pizzaOrder(orderID, sessionName) {
      $(orderID).click(function() {
        if (window.sessionStorage.getItem(sessionName)) {
          var current = Number(window.sessionStorage.getItem(sessionName));
          window.sessionStorage.setItem(sessionName, Number(current + 1));
          console.log('lägger till en pizza');
          console.log('antal är nu: ' + window.sessionStorage.getItem(sessionName));
        } else {
          window.sessionStorage.setItem(sessionName, 1);
          console.log("window.sessionStorage är 1");
        }
      });
    }

    /*
    * Function to create objects
    *
    * @param String   pizzaname       name of the pizza
    * @param String   pizzaprice      price of the pizza
    * @param String   pizzaimage      image of the pizza
    * @param String   pizzatopping    topping of the pizza
    * @param String   pizzaid         html id of the pizza
    * @param String   pizzadec        description of the pizza
    *
    */
    function PizzaObject(pizzaname, pizzaprice, pizzaimage, pizzatopping, pizzaid, pizzadesc) {
      this.name = pizzaname;
      this.price = pizzaprice;
      this.image = pizzaimage;
      this.topping = pizzatopping;
      this.id = pizzaid;
      this.desc = pizzadesc;
    }

    // Create pizza objects from function pizzaObject()
    var bussola = new PizzaObject("Bussola", "70", "img/bussola.jpg", "Skinka, räkor", "order-bussola", "Detta är våran sjukt goda Bussolapizza");
    var calzoncino = new PizzaObject("Calzoncino", "75", "img/calzoncino.jpg", "Inbakad. Skinka, räkor", "order-calzoncino", "Detta är vår populära inbakade pizza Calzoncino");
    var calzone = new PizzaObject("Calzone", "65", "img/calzone.jpg", "Inbakad. Skinka", "order-calzone", "Detta är vår inbakade bästsäljare");
    var capricciosa = new PizzaObject("Capricciosa", "70", "img/capricciosa.jpeg", "Skinka, champinjoner", "order-capricciosa", "Detta är vår mest sålda pizza och god är den verkligen");
    var hawaiispecial = new PizzaObject("Hawaii Special", "80", "img/hawaii-special.jpg", "Skinka, ananas, banan, curry", "order-hawaiispecial", "Detta är en rolig twist på klassikern hawaii");
    var hawaii = new PizzaObject("Hawaii", "65", "img/hawaii.jpg", "Skinka, ananas", "order-hawaii", "Den supergoda pizzan Hawaii med uppfriskande ananas");
    var kebabpizza = new PizzaObject("Kebabpizza", "75", "img/kebabpizza.jpg", "Lök, tomat, kebab, vitlökssås", "order-kebabpizza", "Är du sugen på kebab? Prova då denna supergoda pizza");
    var margerita = new PizzaObject("Margerita", "70", "img/margerita.png", "Tomat, ost", "order-margerita", "Ingrediensinnehållet må inte vara spännande, men låt dig inte luras");
    var marina = new PizzaObject("Marina", "70", "img/marina.jpg", "Skinka, räkor, musslor", "order-marina", "Detta är vår populära pizza med inspiration från havet");
    var vesuvio = new PizzaObject("Vesuvio", "65", "img/vesuvio.jpg", "Skinka", "order-vesuvio", "En av de mest populära pizzor hos Pizzeria Calzone");



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

    if (window.sessionStorage.bussola) {
      shoppingCount("count-bussola", "bussola");
      totalBussola = Number(bussola.price * window.sessionStorage.bussola);
    } else {
      shoppingCountZero("count-bussola");
    }

    if (window.sessionStorage.calzoncino) {
      shoppingCount("count-calzoncino", "calzoncino");
      totalCalzoncino = Number(calzoncino.price * window.sessionStorage.calzoncino);
    } else {
      shoppingCountZero("count-calzoncino");
    }

    if (window.sessionStorage.calzone) {
      shoppingCount("count-calzone", "calzone");
      totalCalzone = Number(calzone.price * window.sessionStorage.calzone);
    } else {
      shoppingCountZero("count-calzone");
    }

    if (window.sessionStorage.capricciosa) {
      shoppingCount("count-capricciosa", "capricciosa");
      totalCapricciosa = Number(capricciosa.price * window.sessionStorage.capricciosa);
    } else {
      shoppingCountZero("count-capricciosa");
    }

    if (window.sessionStorage.hawaiispecial) {
      shoppingCount("count-hawaiispecial", "hawaiispecial");
      totalHawaiispecial = Number(hawaiispecial.price * window.sessionStorage.hawaiispecial);
    } else {
      shoppingCountZero("count-hawaiispecial");
    }

    if (window.sessionStorage.hawaii) {
      shoppingCount("count-hawaii", "hawaii");
      totalHawaii = Number(hawaii.price * window.sessionStorage.hawaii);
    } else {
      shoppingCountZero("count-hawaii");
    }

    if (window.sessionStorage.kebabpizza) {
      shoppingCount("count-kebabpizza", "kebabpizza");
      totalKebabpizza = Number(kebabpizza.price * window.sessionStorage.kebabpizza);
    } else {
      shoppingCountZero("count-kebabpizza");
    }

    if (window.sessionStorage.margerita) {
      shoppingCount("count-margerita", "margerita");
      totalMargerita = Number(margerita.price * window.sessionStorage.margerita);
    } else {
      shoppingCountZero("count-margerita");
    }

    if (window.sessionStorage.marina) {
      shoppingCount("count-marina", "marina");
      totalMarina = Number(marina.price * window.sessionStorage.marina);
    } else {
      shoppingCountZero("count-marina");
    }

    if (window.sessionStorage.vesuvio) {
      shoppingCount("count-vesuvio", "vesuvio");
      totalVesuvio = Number(vesuvio.price * window.sessionStorage.vesuvio);
    } else {
      shoppingCountZero("count-vesuvio");
    }


    // sum of all the totalPizzas
    var priceToPay = totalBussola + totalCalzoncino + totalCalzone + totalCapricciosa + totalHawaiispecial + totalHawaii + totalKebabpizza + totalMargerita + totalMarina + totalVesuvio;

    document.getElementById("total").innerHTML = priceToPay + ' kr';

    // delete individual window.sessionStorage if the buttons are clicked.
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

    // clear all the window.sessionStorage
    $('#clearShoppingcart').click(function() {
      console.log("du har klickat på rensa");
      window.sessionStorage.clear();
      window.location.reload();
    });


})();
