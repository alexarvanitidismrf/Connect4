(function() {
  'use strict';

  angular
    .module('connect4')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
