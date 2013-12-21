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

    value: 1,
    max: 2,
    showLabel: true,
    appendLabel: true,

    percentage: function(){
      if (!this.get('value') || !this.get('max')) {
        return 0
      }
      perc = Math.floor(this.get('value') / this.get('max') * 100);
      if(perc == 100) {
        this.sendAction('on-complete');
      }
      return perc
    }.property('value', 'max'),

    displayPercentage: function(){
      return Math.min(this.get('percentage'), 100);
    }.property('percentage'),

    textPercentage: function(){
      return this.get('percentage') + '%';
    }.property('percentage'),

    widthStyle: function(){
      return 'width:' + this.get('displayPercentage') + '%'
    }.property('displayPercentage')

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

Ember.TEMPLATES["components/ic-progress-bar-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\nic-progress-bar {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    color: darkgrey;\n  }\n .ic-progress-bar-border {\n   width: 100%;\n   border: solid 1px darkgrey;\n   border-radius: 2px;\n   z-index: 3;\n }\n .ic-progress-bar-container {\n   width: 100%;\n   position: relative;\n }\n .ic-progress-bar-fill {\n   background: lightgrey;\n   border-radius: 2px;\n   height: 30px;\n }\n .ic-progress-label {\n   font-size: 0.8em;\n   padding-left: 2px;\n }\n");
  
});

Ember.TEMPLATES["components/ic-progress-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "textPercentage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<style>\n</style>\n<div class='ic-progress-bar-border'>\n  <div class='ic-progress-bar-container'>\n    <div class='ic-progress-bar-fill' \n      ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "ID"};
  options = {hash:{
    'style': ("widthStyle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n      ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "ID"};
  options = {hash:{
    'title': ("textPercentage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    </div>\n  </div>\n</div>\n<div class='ic-progress-label'>\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "appendLabel", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
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
      'ic-styled',
      './lib/templates',
    ], function(Ember, IcProgressBarComponent) {
      return factory(Ember, IcProgressBarComponent);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('ember'),
      require('./lib/components/ic-progress-bar'),
      require('ic-styled'),
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

