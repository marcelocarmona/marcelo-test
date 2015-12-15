(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(messageCenterService) {
    var vm = this;

    vm.msg = function () {
        messageCenterService.add(
           'info', 'Servicio a implementar',
           {timeout: 3000, status: messageCenterService.status.next});
    };
  }
})();
