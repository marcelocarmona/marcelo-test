(function() {
  'use strict';

  angular
    .module('test')
    .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();
