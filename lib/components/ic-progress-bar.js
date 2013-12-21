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
