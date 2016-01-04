// Create mithril app here
console.log('hello world!');
console.log(m);

// Model
var Page = {
  items: null,

  me: function() {
      this.items = m.request({method: "GET", url: "data/me.json"});
      return this.items;
      console.log(this.items);
  }
};

// Template
var Template = {
    compile: function(id, context) {
        var source   = document.getElementById(id).innerHTML;
        var template = Handlebars.compile(source);
        var html     = template(context);

        return html;
    }
};

// Components
var Me = {
    controller: function() {
        return { page: Page.me() };
    },
    view: function(controller) {
        var source   = document.getElementById("page_tpl").innerHTML;
        var template = Handlebars.compile(source);
        var context  = controller.page();
        var html     = template(context);

        return m("main", m.trust(html));
    }
}

// Routes
m.route(document.getElementById('main'), "/", {
  "/": Me,
  "test": Me
});

m.route.mode = "hash";
