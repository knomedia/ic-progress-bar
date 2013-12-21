App = Ember.Application.create({
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

App.ApplicationController = Ember.Controller.extend({
  foo: 'bar',
  mx: 6,
  vl: 4,
  actions: {
    completed: function() {
      this.set('foo', 'baz');
    }
  }
});

