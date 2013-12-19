+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) {
      return factory(Ember);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'));
  } else {
    root.IcProgressBarComponent = factory(Ember);
  }
}(this, function(Ember) {

  var ProgressBarComponent = Ember.Component.extend({

    tagName: 'ic-progress-bar',

    value: 9,
    max: 10,


    percentComplete: function(){
      if (!this.get('value') || !this.get('max')) {
        return 0
      }
      perc = this.get('value') / this.get('max');
      return Math.floor(perc * 100);
    }.property('value', 'max'),

    widthStyle: function(){
      return 'width:' + this.get('percentComplete') + '%'
    }.property('percentComplete')

  });

  return ProgressBarComponent;

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

Ember.TEMPLATES["components/ic-progress-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<style>\n  ic-progress-bar {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    color: darkgrey;\n  }\n  .ic-progress-bar-border {\n    width: 100%;\n    border: solid 1px darkgrey;\n    border-radius: 5px;\n  }\n  .ic-progress-bar-fill {\n    background: lightgrey;\n    padding: 15px;\n    width: 60%;\n    border-radius: 5px;\n  }\n</style>\n<div class='ic-progress-bar-border'>\n  <div class='ic-progress-bar-fill' ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "ID"};
  options = {hash:{
    'style': ("widthStyle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

});
// awful, awful UMD boilerplate, however, this makes it just work™ everywhere
// make sure you add dependencies in all three places (amd, cjs, global)
+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'ember',
      './lib/components/ic-progress-bar',
      './lib/templates'
    ], function(Ember, IcProgressBarComponent) {
      return factory(Ember, IcProgressBarComponent);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('ember'),
      require('./lib/components/ic-progress-bar'),
      require('./lib/templates')
    );
  } else {
    factory(
      Ember,
      IcProgressBarComponent
    );
  }
}(this, function(Ember, IcProgressBarComponent) {

  // automatically register components/views etc. on the container so that
  // consumers of the library don't have to do it.
  Ember.Application.initializer({
    name: 'ic-progress-bar',
    initialize: function(container, application) {
      container.register('component:ic-progress-bar', IcProgressBarComponent);
    }
  });

  // return all the things so people don't have to dig down into the repository
  // to access the objects in lib
  return {
    IcProgressBar: IcProgressBarComponent
  };

});

