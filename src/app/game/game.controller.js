(function() {
  'use strict';

  angular
    .module('connect4')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($scope, Board) {
    var vm = this;
    vm.board = Board.getBoard();
    window. test = vm.board;
    vm.flag = false;

    vm.clickedCell = function(e, rowNum, columnNum){
      var row = e.x / 100;
      var column = e.y / 100;
      console.log(rowNum, columnNum);


      vm.board[rowNum][columnNum] = vm.flag ? 1 : 2;
      vm.flag = !vm.flag;
      //console.log(Board.play(1,columnNum));
      //vm.board = Board.getBoard();
    }

  }
})();
