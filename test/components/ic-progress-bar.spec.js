module('IcProgressBarComponent', {
  setup: function() {
    App.reset();
  }
});

test('updates percentage correctly', function() {
  var progBar = App.__container__.lookup('component:ic-progress-bar');
  progBar.set('value', '3');
  progBar.set('max', '7');
  equal(progBar.get('percentage'), 42, 'round down percentage');
});


test('only displays max 100 percent', function() {
  var progBar = App.__container__.lookup('component:ic-progress-bar');
  progBar.set('value', '11');
  progBar.set('max', '10');
  equal(progBar.get('displayPercentage'), 100, 'caps display at 100');
});


test('text displays percent with %', function() {
  var progBar = App.__container__.lookup('component:ic-progress-bar');
  progBar.set('value', '8');
  progBar.set('max', '10');
  equal(progBar.get('textPercentage'), '80%', 'text has % sign');
});

test('bar visually updates correctly', function() {
  var controller = App.__container__.lookup('controller:application');
  var progBar = App.__container__.lookup('component:ic-progress-bar');
  Ember.run(null, function(){
    controller.set('vl', '45');
    controller.set('mx', '100');
  });
  equal(find('.ic-progress-bar-fill').first().attr('style'), 'width:45%')
});
