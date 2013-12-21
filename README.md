# ic-progress-bar

## Usage

```handlebars
{{#ic-progress-bar max=maxValue value=currentValue on-complete='completed'}}
  Score
{{/ic-progress-bar}}
```

```javascript
App.ApplicationController = Ember.Controller.extend({
  maxValue: 50,
  currentValue: 75,
  actions: {
    completed: function() {
      //yeah the progress bar hit 100
    }
  }
});
```

## Contributing

After cloning this repo, install dependencies:

```sh
$ npm install
$ bower install
```

Fire up the grunt watcher:

```sh
$ grunt
```

Then in a different tab run your tests with testem:

```sh
$ testem
```
