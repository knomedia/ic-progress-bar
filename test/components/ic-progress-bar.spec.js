module('IcProgressBarComponent', {
  setup: function() {
    App.reset();
  }
});

test('sends click action', function() {
  expect(2);
  var controller = App.__container__.lookup('controller:application');
  equal(controller.get('foo'), 'bar');
  click('#ic-progress-bar-1').then(function() {
    equal('baz', 'baz');
  });
});

