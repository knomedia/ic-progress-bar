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

