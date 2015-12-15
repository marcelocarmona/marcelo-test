(function() {
  'use strict';

  angular
    .module('test')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $timeout) {
    $log.debug('runBlock end');
  }

})();
