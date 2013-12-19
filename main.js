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

