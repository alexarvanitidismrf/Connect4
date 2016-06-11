(function() {
  'use strict';

  angular
    .module('connect4')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController(Board) {
    var vm = this;
    vm.board = Board.getBoard();

    console.log(vm.board);

  }
})();
