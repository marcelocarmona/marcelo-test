(function() {
  'use strict';

  angular
    .module('test')
    .config(config);

  /** @ngInject */
  function config($logProvider, cfpLoadingBarProvider) {
    /////////////////////////////////////
    // Enable log
    /////////////////////////////////////
    $logProvider.debugEnabled(true);

    /////////////////////////////////////
    // angular-loading-bar configuration
    /////////////////////////////////////
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 0;

  }

})();
