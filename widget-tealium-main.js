/*******************************************************************************
 * This source code is the property of Lloyds Banking Group PLC.
 *
 * All Rights Reserved.
 *
 * File Name: widget-tealium: main.js
 *
 ******************************************************************************/
define(function(require, exports, module) {

  'use strict';

  module.name = 'widget-tealium';

  var base = require('base');
  var core = require('core');
  var ui = require('ui');

  var deps = [core.name, ui.name];

  /**
   * @ngInject
   */
  function run() {
      // !this is just a POC!
      // Proper way would be to modify require-confing.js
      // to include appropriate path for the utag.js file
      require(["/static/widgets/[BBHOST]/widget-tealium/scripts/tags/utag.js"]);
  }

  module.exports = base.createModule(module.name, deps).constant(
      'WIDGET_NAME', module.name).controller(require('./controllers'))
    .service(require('./models')).run(run);
});
