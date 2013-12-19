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

