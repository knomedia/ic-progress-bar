module('XFooComponent', {
  setup: function() {
    App.reset();
  }
});

test('sends click action', function() {
  expect(2);
  var controller = App.__container__.lookup('controller:application');
  equal(controller.get('foo'), 'bar');
  click('#x-foo-1').then(function() {
    equal(controller.get('foo'), 'baz');
  });
});

