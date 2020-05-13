# Lexa Admin & Dashboard Template in Vuejs + Laravel

### Lexa
this is the script I added to the fresh laravel project and vuejs presets in laravel-ui

* app/resources/js/bootstrap.js 
  ```
  require('metismenu');
  require('jquery-slimscroll');
  require('node-waves');
  require('jquery-sparkline');
  require('./lexa/app');
  ```
* app/resources/sass/app.scss
  ```
  @import '../../node_modules/metismenu/dist/metisMenu.css';
  @import 'icons.scss';
  @import 'lexa/style.scss';
  ```

* app/resources/js/views/Home.vue
  ```
  window.$.MainApp.init()
  ```