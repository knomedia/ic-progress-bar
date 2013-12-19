+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) {
      return factory(Ember);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'));
  } else {
    root.XFooComponent = factory(Ember);
  }
}(this, function(Ember) {

  var XFooComponent = Ember.Component.extend({
    click: function() {
      this.sendAction('on-click', 'bar');
    }
  });

  return XFooComponent;

});


+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) { return factory(Ember); });
  } else if (typeof exports === 'object') {
    factory(require('ember'));
  } else {
    factory(Ember);
  }
}(this, function(Ember) {

Ember.TEMPLATES["components/x-foo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  
});

});
// awful, awful UMD boilerplate, however, this makes it just work™ everywhere
// make sure you add dependencies in all three places (amd, cjs, global)
+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'ember',
      './lib/components/x-foo',
      './lib/templates'
    ], function(Ember, XFooComponent) {
      return factory(Ember, XFooComponent);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('ember'),
      require('./lib/components/x-foo'),
      require('./lib/templates')
    );
  } else {
    factory(
      Ember,
      XFooComponent
    );
  }
}(this, function(Ember, XFooComponent) {

  // automatically register components/views etc. on the container so that
  // consumers of the library don't have to do it.
  Ember.Application.initializer({
    name: 'ic-progress-bar',
    initialize: function(container, application) {
      container.register('component:x-foo', XFooComponent);
    }
  });

  // return all the things so people don't have to dig down into the repository
  // to access the objects in lib
  return {
    XFooComponent: XFooComponent
  };

});

