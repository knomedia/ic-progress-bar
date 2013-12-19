Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("ohai");
  }

  hashContexts = {'id': depth0,'on-click': depth0,'tagName': depth0};
  hashTypes = {'id': "STRING",'on-click': "STRING",'tagName': "STRING"};
  options = {hash:{
    'id': ("x-foo-1"),
    'on-click': ("setFoo"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['x-foo'] || (depth0 && depth0['x-foo'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "x-foo", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  return buffer;
  
});