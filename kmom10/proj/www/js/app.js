$(document).ready(function()    {

  // get bootstrap navbar to collapse on click
  $(document).on('click', function(){
    $('.collapse').collapse('hide');
  })


  // Model
  var Page = {

      items: null,
      items2: null,
      concatItems: null,

      // Get json of the IT-field
      it_field: function() {
        this.items = m.request({method: "GET", url : "json/af-api/IT-field.json"});
        return this.items;
      },

      // Get the workgroup linking json
      workgroups: function() {
        this.items = m.request({method: "GET", url : "json/yrkesgrupper-linking.json"});
        return this.items;
      },

      // function for fetching specific yrkesgrupp from file
      // @param string file The file to target
      workgroup_function: function(file) {
        this.items = m.request({method: "GET", url : "json/af-api/yrkesgrupp/yrkesgruppID-" + file + ".json"});
        return this.items;
      },

      // function for fetching json file of län and its further linking
      lan: function() {
        this.items = m.request({method: "GET", url : "json/lan-linking.json"});
        return this.items;
      },

      // function for fetching all job listings in a län from file
      // @param string file the file nr to target
      lan_function : function(file) {
        this.items = m.request({method: "GET", url : "json/af-api/lan/lanID-" + file + ".json"});
        return this.items;
      },

  };


  /*
  * Components
  */

  // Component for Index
  var Index = {
      controller: function() {
          return { page: Page.it_field() };
      },
      view: function(controller) {
          var source   = document.getElementById("index_tpl").innerHTML;
          var template = Handlebars.compile(source);
          var context  = controller.page();
          var html     = template(context);

          return m("main", m.trust(html));
      }
  }

  // Component for listing all workgroups with linking functionality
  var Workgroups = {
      controller: function() {
          return { page: Page.workgroups() };
      },
      view: function(controller) {
          var source   = document.getElementById("workgroups_tpl").innerHTML;
          var template = Handlebars.compile(source);
          var context  = controller.page();
          var html     = template(context);

          return m("main", m.trust(html));
      }
  }

  // Component with :Workgroupsid url param to fetch jobs in a workgroup
  var WorkgroupsParam = {
      controller: function() {
          var id = m.route.param("workgroupid");
          return { page: Page.workgroup_function(id) }
      },
      view: function(controller) {
        var source   = document.getElementById("single_workgroup_tpl").innerHTML;
        var template = Handlebars.compile(source);
        var context  = controller.page();
        var html     = template(context);

        return m("main", m.trust(html));
      }
  }

  var Lan = {
      controller: function() {
          return { page: Page.lan() };
      },
      view: function(controller) {
          var source   = document.getElementById("lan_tpl").innerHTML;
          var template = Handlebars.compile(source);
          var context  = controller.page();
          var html     = template(context);

          return m("main", m.trust(html));
      }
  }

  // Component with :lanid url param to fetch jobs in a lan
  var LanParam = {
      controller: function() {
          var id = m.route.param("lanid");
          return { page: Page.lan_function(id) }
      },
      view: function(controller) {
        var source   = document.getElementById("single_lan_tpl").innerHTML;
        var template = Handlebars.compile(source);
        var context  = controller.page();
        var html     = template(context);

        return m("main", m.trust(html));
      }
  }



  // Routes
  m.route(document.getElementById("main"), "/", {
    "/":                        Index,
    "/workgroup":               Workgroups,
    "/workgroup/:workgroupid":  WorkgroupsParam,
    "/lan":                     Lan,
    "/lan/:lanid":              LanParam

  });

  m.route.mode = "hash";

})
